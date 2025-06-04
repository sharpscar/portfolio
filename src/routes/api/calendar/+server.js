import { createClient } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';

const supabaseUrl = 'https://ugkfbwjpzzfuuqyubazb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVna2Zid2pwenpmdXVxeXViYXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMDk2MTIsImV4cCI6MjA2NDU4NTYxMn0.okrUDSEOYu_hMWTz5WYWLB-KLfxu7RuJtP3LNmHTwn4';

const supabase = createClient(supabaseUrl, supabaseKey);

// GET - 모든 달력 이미지 조회
export async function GET() {
	try {
		const { data, error } = await supabase
			.from('calendar_images')
			.select('*')
			.order('created_at', { ascending: false });

		if (error) {
			console.error('Supabase 조회 오류:', error);
			return json({ error: error.message }, { status: 400 });
		}

		// 날짜 키를 기준으로 객체로 변환
		const calendarData = {};
		data.forEach(item => {
			calendarData[item.date_key] = {
				image: item.image_url,
				cloudinaryId: item.cloudinary_id,
				uploadDate: item.created_at,
				originalName: item.original_name
			};
		});

		return json({ calendarData });
	} catch (error) {
		console.error('API 오류:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}

// POST - 새 이미지 저장
export async function POST({ request }) {
	try {
		const { dateKey, imageUrl, cloudinaryId, originalName } = await request.json();

		if (!dateKey || !imageUrl) {
			return json({ error: 'dateKey and imageUrl are required' }, { status: 400 });
		}

		// 기존 데이터가 있으면 업데이트, 없으면 삽입
		const { data, error } = await supabase
			.from('calendar_images')
			.upsert({
				date_key: dateKey,
				image_url: imageUrl,
				cloudinary_id: cloudinaryId,
				original_name: originalName
			}, {
				onConflict: 'date_key'
			})
			.select();

		if (error) {
			console.error('Supabase 저장 오류:', error);
			return json({ error: error.message }, { status: 400 });
		}

		return json({ success: true, data: data[0] });
	} catch (error) {
		console.error('API 오류:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}

// DELETE - 이미지 삭제
export async function DELETE({ request }) {
	try {
		const { dateKey } = await request.json();

		if (!dateKey) {
			return json({ error: 'dateKey is required' }, { status: 400 });
		}

		const { error } = await supabase
			.from('calendar_images')
			.delete()
			.eq('date_key', dateKey);

		if (error) {
			console.error('Supabase 삭제 오류:', error);
			return json({ error: error.message }, { status: 400 });
		}

		return json({ success: true });
	} catch (error) {
		console.error('API 오류:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}