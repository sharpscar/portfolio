<script>
	import { onMount } from 'svelte';

	let currentDate = new Date();
	let selectedDate = null;
	let showImageModal = false;
	let calendarData = {};
	let imagePreview = null;
	let uploadedFile = null;

	// Cloudinary 설정 (여기에 본인의 Cloud Name과 Upload Preset Name을 넣어주세요)
	const CLOUDINARY_CLOUD_NAME = 'dxwuthcy0'; 
	const CLOUDINARY_UPLOAD_PRESET = 'scar_image';

	// 달력 데이터 변경 시 반응형으로 업데이트
	$: calendarDataReactive = calendarData;

	// 달력 데이터를 로컬스토리지에서 불러오기 (초기 로드 시에만 사용)
	onMount(() => {
		const saved = localStorage.getItem('calendar-data');
		if (saved) {
			calendarData = JSON.parse(saved);
		}
	});

	// 달력 데이터 저장 (이제 Cloudinary URL을 저장)
	function saveCalendarData() {
		localStorage.setItem('calendar-data', JSON.stringify(calendarData));
	}

	// 현재 월의 첫 번째 날
	$: firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	// 현재 월의 마지막 날
	$: lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
	// 첫 번째 날의 요일 (0 = 일요일)
	$: startingDayOfWeek = firstDayOfMonth.getDay();
	// 현재 월의 일수
	$: daysInMonth = lastDayOfMonth.getDate();

	// 달력 그리드 생성
	$: calendarGrid = (() => {
		const grid = [];
		let day = 1;
		
		// 6주 * 7일 = 42칸
		for (let week = 0; week < 6; week++) {
			const weekDays = [];
			for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
				const cellIndex = week * 7 + dayOfWeek;
				
				if (cellIndex < startingDayOfWeek || day > daysInMonth) {
					weekDays.push(null);
				} else {
					weekDays.push(day);
					day++;
				}
			}
			grid.push(weekDays);
			
			// 모든 날짜를 표시했으면 중단
			if (day > daysInMonth) break;
		}
		
		return grid;
	})();

	// 월 변경
	function changeMonth(delta) {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1);
	}

	// 날짜 클릭
	function selectDate(day) {
		if (!day) return;
		selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
		showImageModal = true;
	}

	// 이미지 파일 선택
	function handleFileSelect(event) {
		const file = event.target.files[0];
		if (!file) return;

		if (!file.type.startsWith('image/')) {
			alert('이미지 파일만 업로드 가능합니다.');
			return;
		}

		uploadedFile = file;
		
		// 미리보기 생성을 위해 FileReader 사용
		const reader = new FileReader();
		reader.onload = (e) => {
			imagePreview = e.target.result; // Base64 데이터를 미리보기로 사용
		};
		reader.readAsDataURL(file);
	}

	// 이미지 리사이즈 및 프리뷰 (Cloudinary가 처리하므로 로컬 리사이징은 제거)
	// 이 함수는 더 이상 Cloudinary 업로드에 사용되지 않지만,
	// 로컬 미리보기 용도로는 유지할 수 있습니다.
	// 현재는 Base64 미리보기만 사용하므로 이 함수는 제거합니다.

	// 이미지 저장 (Cloudinary에 업로드)
	async function saveImage() {
		if (!uploadedFile || !selectedDate) return;

		const formData = new FormData();
		formData.append('file', uploadedFile);
		formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

		try {
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
				{
					method: 'POST',
					body: formData
				}
			);

			if (!response.ok) {
				throw new Error('Cloudinary 업로드 실패');
			}

			const data = await response.json();
			const imageUrl = data.secure_url; // Cloudinary에서 반환된 안전한 URL

			const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
			calendarData[dateKey] = {
				image: imageUrl, // Base64 대신 Cloudinary URL 저장
				uploadDate: new Date().toISOString()
			};

			// 반응형 업데이트를 위해 새 객체 생성
			calendarData = { ...calendarData };
			
			saveCalendarData();
			closeModal();
			alert('이미지가 성공적으로 업로드되었습니다!');
		} catch (error) {
			console.error('이미지 업로드 중 오류 발생:', error);
			alert('이미지 업로드에 실패했습니다. 콘솔을 확인해주세요.');
		}
	}

	// 이미지 삭제
	function deleteImage() {
		if (!selectedDate) return;

		const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
		delete calendarData[dateKey];
		
		// 반응형 업데이트를 위해 새 객체 생성
		calendarData = { ...calendarData };
		
		saveCalendarData();
		closeModal();
	}

	// 모달 닫기
	function closeModal() {
		showImageModal = false;
		selectedDate = null;
		imagePreview = null;
		uploadedFile = null;
	}

	// 날짜에 이미지가 있는지 확인
	function hasImage(day) {
		if (!day) return false;
		const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
		const hasImg = !!calendarData[dateKey];
		if (hasImg) {
			console.log(`Day ${day} has image:`, dateKey, calendarData[dateKey]);
		}
		return hasImg;
	}

	// 저장된 이미지 가져오기
	function getImage(day) {
		if (!day) return null;
		const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
		// 이제 Base64 대신 Cloudinary URL을 직접 반환
		return calendarData[dateKey]?.image;
	}

	// 월 이름
	const monthNames = [
		'1월', '2월', '3월', '4월', '5월', '6월',
		'7월', '8월', '9월', '10월', '11월', '12월'
	];

	// 요일 이름
	const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
</script>

<section id="calendar" class="calendar-section">
	<div class="container">
		<h2>성실함을 기록!</h2>
		<p class="section-description">
			매일 아침 운동으로 시작합니다.
		</p>

		<div class="calendar">
			<!-- 월 네비게이션 -->
			<div class="calendar-header">
				<button class="nav-btn" on:click={() => changeMonth(-1)}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
					</svg>
				</button>
				
				<h3 class="month-year">
					{currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
				</h3>
				
				<button class="nav-btn" on:click={() => changeMonth(1)}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
					</svg>
				</button>
			</div>

			<!-- 요일 헤더 -->
			<div class="calendar-weekdays">
				{#each dayNames as dayName}
					<div class="weekday-header">{dayName}</div>
				{/each}
			</div>

			<!-- 달력 그리드 -->
			<div class="calendar-grid">
				{#each calendarGrid as week}
					{#each week as day}
						<div 
							class="calendar-day {day ? 'active' : 'inactive'} {hasImage(day) ? 'has-image' : ''}"
							on:click={() => selectDate(day)}
						>
							{#if day}
								<span class="day-number">{day}</span>
								{#if hasImage(day)}
									<div class="image-indicator">
										<img src={getImage(day)} alt="Day {day} 사진" />
									</div>
								{:else}
									<div class="empty-indicator">
										<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
											<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
										</svg>
									</div>
								{/if}
							{/if}
						</div>
					{/each}
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- 이미지 업로드 모달 -->
{#if showImageModal && selectedDate}
	<div class="modal-overlay" on:click={closeModal}>
		<div class="modal-content" on:click|stopPropagation>
			<div class="modal-header">
				<h3>
					{selectedDate.getFullYear()}년 {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}일
				</h3>
				<button class="close-btn" on:click={closeModal}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
					</svg>
				</button>
			</div>

			<div class="modal-body">
				{#if imagePreview}
					<div class="image-preview">
						<img src={imagePreview} alt="Preview" />
					</div>
				{:else if getImage(selectedDate.getDate())}
					<div class="image-preview">
						<img src={getImage(selectedDate.getDate())} alt="Saved" />
					</div>
				{:else}
					<div class="upload-placeholder">
						<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
							<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
						</svg>
						<p>이미지를 선택해주세요</p>
					</div>
				{/if}

				<div class="upload-controls">
					<input 
						type="file" 
						accept="image/*" 
						on:change={handleFileSelect}
						id="image-upload"
						style="display: none;"
					/>
					<label for="image-upload" class="upload-btn">
						이미지 선택
					</label>

					{#if imagePreview || getImage(selectedDate.getDate())}
						<button class="save-btn" on:click={saveImage}>
							저장
						</button>
						<button class="delete-btn" on:click={deleteImage}>
							삭제
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.calendar-section {
		padding: 5rem 2rem;
		background: rgba(255, 255, 255, 0.02);
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	h2 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 1rem;
		color: var(--color-theme-2);
	}

	.section-description {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 3rem;
		color: rgba(0, 0, 0, 0.7);
	}

	.calendar {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.calendar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.nav-btn {
		background: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.nav-btn:hover {
		background: #4f46e5;
	}

	.month-year {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-theme-2);
		margin: 0;
	}

	.calendar-weekdays {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1px;
		margin-bottom: 1rem;
	}

	.weekday-header {
		text-align: center;
		font-weight: 600;
		padding: 1rem 0;
		color: var(--color-theme-2);
		background: rgba(64, 117, 166, 0.1);
	}

	.calendar-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1px;
		background: #e1e5e9;
		border: 1px solid #e1e5e9;
	}

	.calendar-day {
		background: white;
		min-height: 120px;
		padding: 0.5rem;
		cursor: pointer;
		transition: all 0.2s ease;
		position: relative;
		display: flex;
		flex-direction: column;
		border: 2px solid transparent;
		min-width: 0;
	}

	.calendar-day.active:hover {
		background: rgba(99, 102, 241, 0.1);
	}

	.calendar-day.inactive {
		background: #f8f9fa;
		cursor: default;
	}

	.calendar-day.has-image {
		background: rgba(99, 102, 241, 0.05);
		border: 2px solid var(--color-theme-1);
		box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
	}

	.day-number {
		font-weight: 500;
		color: var(--color-theme-2);
		margin-bottom: 0.5rem;
	}

	.image-indicator {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 6px;
		margin-top: 0.25rem;
		background: #f8f9fa;
		max-width: 100%;
	}

	.image-indicator img {
		width: 100%;
		height: 70px;
		object-fit: cover;
		border-radius: 4px;
		transition: transform 0.2s ease;
	}

	.calendar-day.has-image:hover .image-indicator img {
		transform: scale(1.05);
	}

	.empty-indicator {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0.25rem;
		color: #ccc;
	}

	/* 모달 스타일 */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.modal-content {
		background: white;
		border-radius: 12px;
		max-width: 500px;
		width: 90%;
		max-height: 80vh;
		overflow-y: auto;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem;
		border-bottom: 1px solid #e1e5e9;
	}

	.modal-header h3 {
		margin: 0;
		color: var(--color-theme-2);
	}

	.close-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: #666;
		padding: 0.5rem;
		border-radius: 50%;
		transition: background 0.3s ease;
	}

	.close-btn:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	.modal-body {
		padding: 1.5rem;
	}

	.image-preview {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.image-preview img {
		max-width: 100%;
		max-height: 300px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.upload-placeholder {
		text-align: center;
		padding: 3rem 1rem;
		color: #999;
		border: 2px dashed #ddd;
		border-radius: 8px;
		margin-bottom: 1.5rem;
	}

	.upload-placeholder svg {
		margin-bottom: 1rem;
	}

	.upload-controls {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.upload-btn {
		background: var(--color-theme-2);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		cursor: pointer;
		transition: background 0.3s ease;
		border: none;
		font-weight: 500;
	}

	.upload-btn:hover {
		background: #0f172a;
	}

	.save-btn {
		background: var(--color-theme-1);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		cursor: pointer;
		transition: background 0.3s ease;
		border: none;
		font-weight: 500;
	}

	.save-btn:hover {
		background: #4f46e5;
	}

	.delete-btn {
		background: #dc3545;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		cursor: pointer;
		transition: background 0.3s ease;
		border: none;
		font-weight: 500;
	}

	.delete-btn:hover {
		background: #c82333;
	}

	/* 반응형 */
	@media (max-width: 768px) {
		.container {
			max-width: 100%;
			padding: 0 1rem;
		}

		.calendar,
		.calendar-weekdays,
		.calendar-grid,
		.calendar-day {
			box-sizing: border-box;
		}

		.calendar {
			padding: 0.5rem;
		}

		.calendar-weekdays,
		.calendar-grid {
			gap: 0;
			grid-template-columns: repeat(7, minmax(0, 1fr));
		}

		.weekday-header,
		.calendar-day {
			min-width: 0;
		}

		.calendar-day {
			min-height: 70px;
			padding: 0.25rem;
		}

		.modal-content {
			margin: 1rem;
		}

		.image-indicator img {
			box-sizing: border-box;
		}

		.upload-controls {
			flex-direction: column;
		}

		h2 {
			font-size: 2rem;
		}
	}
</style>