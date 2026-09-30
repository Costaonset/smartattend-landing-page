const schoolDirectory = [
  { name: 'Lake Road School', province: 'Lusaka', district: 'Lusaka District', town: 'Lusaka', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'STEM Lab', 'Transport'], admission: 'Applications open year-round', contact: '+260 955 111 001', address: 'Lusaka Central' },
  { name: 'Hillview Academy', province: 'Lusaka', district: 'Kafue District', town: 'Kafue', type: 'Day School', category: 'Day', services: ['Sports', 'Library', 'Counselling'], admission: 'Enrollments close in August', contact: '+260 966 222 010', address: 'Kafue Town' },
  { name: 'Matero Community School', province: 'Lusaka', district: 'Lusaka District', town: 'Matero', type: 'Day School', category: 'Day', services: ['School feeding', 'IT access', 'Scholarship support'], admission: 'Open for new term intake', contact: '+260 977 222 011', address: 'Matero High Density' },

  { name: 'Copperbelt Academy', province: 'Copperbelt', district: 'Kitwe District', town: 'Kitwe', type: 'Boarding School', category: 'Boarding', services: ['ICT Lab', 'Science Lab', 'Transport'], admission: 'Open admissions for Grade 8-12', contact: '+260 977 333 020', address: 'Kitwe Central' },
  { name: 'Ndola High School', province: 'Copperbelt', district: 'Ndola District', town: 'Ndola', type: 'Day School', category: 'Day', services: ['Library', 'Sports', 'Medical support'], admission: 'Admissions by district review', contact: '+260 988 444 030', address: 'Ndola East' },
  { name: 'Chingola Learning Centre', province: 'Copperbelt', district: 'Chingola District', town: 'Chingola', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Scholarship support', 'Transport'], admission: 'Intakes in January and July', contact: '+260 999 555 040', address: 'Chingola Town' },

  { name: 'Kabwe Secondary School', province: 'Central', district: 'Kabwe District', town: 'Kabwe', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'STEM lab', 'Hostels'], admission: 'District placement required', contact: '+260 977 404 120', address: 'Kabwe Central' },
  { name: 'Mumbwa Academy', province: 'Central', district: 'Mumbwa District', town: 'Mumbwa', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Transport', 'Agriculture'], admission: 'Open throughout the year', contact: '+260 966 405 121', address: 'Mumbwa Town' },
  { name: 'Chitambo Day School', province: 'Central', district: 'Serenje District', town: 'Serenje', type: 'Day School', category: 'Day', services: ['Library', 'School feeding', 'Sports'], admission: 'Admissions open after results', contact: '+260 955 406 122', address: 'Serenje Town' },

  { name: 'Livingstone Green School', province: 'Southern', district: 'Livingstone District', town: 'Livingstone', type: 'Boarding School', category: 'Boarding', services: ['Music', 'Sports', 'Boarding'], admission: 'New term admissions open', contact: '+260 955 666 050', address: 'Livingstone West' },
  { name: 'Mazabuka High School', province: 'Southern', district: 'Mazabuka District', town: 'Mazabuka', type: 'Boarding School', category: 'Boarding', services: ['Computer lab', 'Agriculture', 'Hostels'], admission: 'Selection after district placement', contact: '+260 966 777 060', address: 'Mazabuka Town' },
  { name: 'Monze Day Learning Academy', province: 'Southern', district: 'Monze District', town: 'Monze', type: 'Day School', category: 'Day', services: ['Counselling', 'IT access', 'Sports'], admission: 'Open termly', contact: '+260 977 778 060', address: 'Monze Town' },

  { name: 'Chipata Academy', province: 'Eastern', district: 'Chipata District', town: 'Chipata', type: 'Boarding School', category: 'Boarding', services: ['Science lab', 'Agriculture', 'Library'], admission: 'Open for 2026 intake', contact: '+260 977 888 070', address: 'Chipata Central' },
  { name: 'Petauke High School', province: 'Eastern', district: 'Petauke District', town: 'Petauke', type: 'Day School', category: 'Day', services: ['Library', 'Sports', 'School feeding'], admission: 'Open after school results', contact: '+260 988 889 071', address: 'Petauke Town' },
  { name: 'Katete Learning Centre', province: 'Eastern', district: 'Katete District', town: 'Katete', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Scholarship support', 'Transport'], admission: 'Term placement available', contact: '+260 966 890 072', address: 'Katete Town' },

  { name: 'Mongu Senior School', province: 'Western', district: 'Mongu District', town: 'Mongu', type: 'Boarding School', category: 'Boarding', services: ['Library', 'Girls support', 'Agriculture'], admission: 'Applications open after results', contact: '+260 966 303 110', address: 'Mongu Town' },
  { name: 'Senanga Community School', province: 'Western', district: 'Senanga District', town: 'Senanga', type: 'Day School', category: 'Day', services: ['IT access', 'School feeding', 'Sports'], admission: 'Open intake for Grade 1-12', contact: '+260 955 304 111', address: 'Senanga Town' },
  { name: 'Kalabo Learning Academy', province: 'Western', district: 'Kalabo District', town: 'Kalabo', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Agriculture', 'Academic support'], admission: 'Boarding admissions open annually', contact: '+260 988 305 112', address: 'Kalabo Town' },

  { name: 'Mpulungu Boarding Secondary School', province: 'Northern', district: 'Mpulungu District', town: 'Mpulungu', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Hostels', 'Academic support'], admission: 'Application open each year', contact: '+260 977 111 101', address: 'Mpulungu Town' },
  { name: 'Mbala Boarding Secondary School', province: 'Northern', district: 'Mbala District', town: 'Mbala', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Laboratory', 'Hostels'], admission: 'Applications open yearly', contact: '+260 977 111 102', address: 'Mbala Town' },
  { name: 'Kasama Girls Secondary School', province: 'Northern', district: 'Kasama District', town: 'Kasama', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Girls support', 'Hostels'], admission: 'Admissions open after results', contact: '+260 977 111 103', address: 'Kasama Town' },
  { name: 'Kaputa Boarding Secondary School', province: 'Northern', district: 'Kaputa District', town: 'Kaputa', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Academic support', 'Hostels'], admission: 'Annual intake', contact: '+260 977 111 104', address: 'Kaputa Town' },
  { name: 'Musa Secondary School', province: 'Northern', district: 'Kasama District', town: 'Kasama', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Hostels', 'Science lab'], admission: 'Enrollment opens after results', contact: '+260 977 111 105', address: 'Kasama Town' },
  { name: 'St. Francis Secondary School', province: 'Northern', district: 'Malole District', town: 'Malole', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Chaplaincy', 'Hostels'], admission: 'Applications accepted yearly', contact: '+260 977 111 106', address: 'Malole Town' },
  { name: 'Kasaba Bay Boarding Secondary School', province: 'Northern', district: 'Nsama District', town: 'Nsama', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Academic support', 'Hostels'], admission: 'Open annually', contact: '+260 977 111 107', address: 'Nsama Town' },
  { name: 'Chiba Day Secondary School', province: 'Northern', district: 'Northern Province', town: 'Northern Province', type: 'Day School', category: 'Day', services: ['Day schooling', 'Library', 'Sports'], admission: 'Admissions open on a termly basis', contact: '+260 977 111 108', address: 'Northern Province' },
  { name: 'Lucheche Day Secondary School', province: 'Northern', district: 'Northern Province', town: 'Northern Province', type: 'Day School', category: 'Day', services: ['Day schooling', 'Library', 'Sports'], admission: 'Open each term', contact: '+260 977 111 109', address: 'Northern Province' },
  { name: 'Chilubi Day Secondary School', province: 'Northern', district: 'Chilubi District', town: 'Chilubi', type: 'Day School', category: 'Day', services: ['Day schooling', 'Sports', 'Academic support'], admission: 'Open after results', contact: '+260 977 111 110', address: 'Chilubi Town' },
  { name: 'Mubanga Chipoya Day Secondary School', province: 'Northern', district: 'Northern Province', town: 'Northern Province', type: 'Day School', category: 'Day', services: ['Day schooling', 'Library', 'Sports'], admission: 'Open throughout the year', contact: '+260 977 111 111', address: 'Northern Province' },
  { name: 'Luwingu Day Secondary School', province: 'Northern', district: 'Luwingu District', town: 'Luwingu', type: 'Day School', category: 'Day', services: ['Day schooling', 'Library', 'Sports'], admission: 'Admissions open annually', contact: '+260 977 111 112', address: 'Luwingu Town' },
  { name: 'Mukanga Day Secondary School', province: 'Northern', district: 'Northern Province', town: 'Northern Province', type: 'Day School', category: 'Day', services: ['Day schooling', 'Library', 'Sports'], admission: 'Open yearly', contact: '+260 977 111 113', address: 'Northern Province' },
  { name: 'Nsumbu Day Secondary School', province: 'Northern', district: 'Nsama District', town: 'Nsama', type: 'Day School', category: 'Day', services: ['Day schooling', 'Sports', 'Academic support'], admission: 'Open annually', contact: '+260 977 111 114', address: 'Nsama Town' },
  { name: 'Menga Day Secondary School', province: 'Northern', district: 'Luwingu District', town: 'Luwingu', type: 'Day School', category: 'Day', services: ['Day schooling', 'Library', 'Academic support'], admission: 'Open after results', contact: '+260 977 111 115', address: 'Luwingu Town' },
  { name: 'Mukosa Day Secondary School', province: 'Northern', district: 'Malole District', town: 'Malole', type: 'Day School', category: 'Day', services: ['Day schooling', 'Sports', 'Academic support'], admission: 'Open each term', contact: '+260 977 111 116', address: 'Malole Town' },

  { name: 'Solwezi Vision Academy', province: 'North-Western', district: 'Solwezi District', town: 'Solwezi', type: 'Boarding School', category: 'Boarding', services: ['Transport', 'Sports', 'ICT'], admission: 'Open admissions all year', contact: '+260 955 202 100', address: 'Solwezi Town' },
  { name: 'Mwinilunga Day School', province: 'North-Western', district: 'Mwinilunga District', town: 'Mwinilunga', type: 'Day School', category: 'Day', services: ['IT access', 'School feeding', 'Counselling'], admission: 'Year-round intake available', contact: '+260 988 203 101', address: 'Mwinilunga Town' },
  { name: 'Kasempa Residential School', province: 'North-Western', district: 'Kasempa District', town: 'Kasempa', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Hostels', 'Science lab'], admission: 'Admission opens after written review', contact: '+260 977 204 102', address: 'Kasempa Town' },

  { name: 'Muchinga Secondary', province: 'Muchinga', district: 'Mpika District', town: 'Mpika', type: 'Boarding School', category: 'Boarding', services: ['STEM support', 'Hostel', 'Sports'], admission: 'District placement required', contact: '+260 988 505 130', address: 'Mpika Town' },
  { name: 'Isoka Day Academy', province: 'Muchinga', district: 'Isoka District', town: 'Isoka', type: 'Day School', category: 'Day', services: ['Library', 'Community outreach', 'Sports'], admission: 'Open from January each year', contact: '+260 955 506 131', address: 'Isoka Town' },
  { name: 'Chinsali Boarding School', province: 'Muchinga', district: 'Chinsali District', town: 'Chinsali', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Scholarship support', 'STEM lab'], admission: 'Applications open termly', contact: '+260 966 507 132', address: 'Chinsali Town' },

  { name: 'Mansa Secondary School', province: 'Luapula', district: 'Mansa District', town: 'Mansa', type: 'Boarding School', category: 'Boarding', services: ['Scholarships', 'Sports', 'IT access'], admission: 'Applications open quarterly', contact: '+260 988 999 080', address: 'Mansa Town' },
  { name: 'Samfya Day School', province: 'Luapula', district: 'Samfya District', town: 'Samfya', type: 'Day School', category: 'Day', services: ['School feeding', 'Library', 'Sports'], admission: 'Open intake each school term', contact: '+260 977 998 081', address: 'Samfya Town' },
  { name: 'Nchelenge Residential School', province: 'Luapula', district: 'Nchelenge District', town: 'Nchelenge', type: 'Boarding School', category: 'Boarding', services: ['Boarding', 'Hostels', 'Agriculture lab'], admission: 'Boarding admissions open annually', contact: '+260 955 997 082', address: 'Nchelenge Town' }
];

const provinceList = [...new Set(schoolDirectory.map((school) => school.province))];

const provinceSummary = provinceList.map((province) => {
  const schools = schoolDirectory.filter((school) => school.province === province);
  return {
    province,
    totalSchools: schools.length,
    boarding: schools.filter((school) => school.category === 'Boarding').length,
    day: schools.filter((school) => school.category === 'Day').length
  };
});

function setupMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function setupHomeSearch() {
  const form = document.getElementById('homeSearchForm');
  const input = document.getElementById('homeSearchInput');

  if (!form || !input) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.trim();
    const query = new URLSearchParams();
    if (value) query.set('search', value);
    window.location.href = `schools.html?${query.toString()}`;
  });
}

function setupEnrollmentModal() {
  const modalMarkup = `
    <div class="enrollment-modal" id="enrollmentModal" aria-hidden="true">
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="enrollmentTitle">
        <div class="modal-header">
          <div>
            <p class="eyebrow modal-eyebrow">ENROLMENT</p>
            <h3 id="enrollmentTitle">Apply to school</h3>
          </div>
          <button type="button" class="modal-close" aria-label="Close enrollment form">×</button>
        </div>

        <form id="enrollmentForm" class="enrollment-form" novalidate>
          <input type="hidden" id="enrollmentSchool" name="schoolName" />

          <div class="field-grid">
            <label>
              Student full name
              <input type="text" name="studentName" required placeholder="Enter full name" />
            </label>
            <label>
              Guardian / parent name
              <input type="text" name="guardianName" required placeholder="Enter parent/guardian name" />
            </label>
          </div>

          <div class="field-grid">
            <label>
              Phone number
              <input type="tel" name="phone" required placeholder="Enter phone number" />
            </label>
            <label>
              Email address
              <input type="email" name="email" required placeholder="Enter email address" />
            </label>
          </div>

          <label>
            Grade 9 statement of result
            <input type="file" name="gradeNineResult" accept=".pdf,.png,.jpg,.jpeg" required />
          </label>

          <label>
            Additional information
            <textarea name="notes" rows="4" placeholder="Tell us why you want to join this school"></textarea>
          </label>

          <p class="enrollment-requirements">Submission: Please upload your Grade 9 statement of result and complete all required fields before submitting. After completing the requirements, submit your application for review.</p>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary modal-cancel">Cancel</button>
          </div>

          <p id="enrollmentStatus" class="form-status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalMarkup);

  const modal = document.getElementById('enrollmentModal');
  const form = document.getElementById('enrollmentForm');
  const schoolField = document.getElementById('enrollmentSchool');
  const status = document.getElementById('enrollmentStatus');
  const closeButtons = modal.querySelectorAll('.modal-close, .modal-cancel');

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    form.reset();
    status.textContent = '';
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.enrollment-btn');
    if (!button) return;

    const schoolName = button.dataset.schoolName;
    schoolField.value = schoolName || 'Selected school';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    status.textContent = '';
    form.querySelector('input[name="studentName"]').focus();
  });

  closeButtons.forEach((button) => button.addEventListener('click', closeModal));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fileInput = form.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    if (!file) {
      status.textContent = 'Please upload your Grade 9 statement of result before submitting.';
      status.style.color = '#b42318';
      return;
    }

    const allowedExtensions = ['pdf', 'png', 'jpg', 'jpeg'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      status.textContent = 'Only PDF, JPG, JPEG and PNG files are allowed for the Grade 9 statement of result.';
      status.style.color = '#b42318';
      return;
    }

    const savedApplications = JSON.parse(localStorage.getItem('edunavApplications') || '[]');
    savedApplications.push({
      school: schoolField.value,
      studentName: form.studentName.value.trim(),
      guardianName: form.guardianName.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      notes: form.notes.value.trim(),
      fileName: file.name,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('edunavApplications', JSON.stringify(savedApplications));

    status.textContent = `Application submitted successfully for ${schoolField.value}.`; 
    status.style.color = '#0d7a63';
    form.reset();

    window.setTimeout(() => {
      closeModal();
    }, 1800);
  });
}

function setupSchoolDirectory() {
  const resultsContainer = document.getElementById('schoolResults');
  const provinceFilter = document.getElementById('provinceFilter');
  const districtFilter = document.getElementById('districtFilter');
  const townFilter = document.getElementById('townFilter');
  const schoolTypeFilter = document.getElementById('schoolTypeFilter');
  const searchField = document.getElementById('schoolSearch');
  const countLabel = document.getElementById('schoolCount');

  if (!resultsContainer) return;

  const districts = [...new Set(schoolDirectory.map((school) => school.district))].sort();
  const towns = [...new Set(schoolDirectory.map((school) => school.town))].sort();

  if (provinceFilter) {
    provinceFilter.innerHTML = '<option value="All">All provinces</option>' + provinceList.map((province) => `<option value="${province}">${province}</option>`).join('');
    const params = new URLSearchParams(window.location.search);
    const selectedProvince = params.get('province');
    if (selectedProvince && provinceList.includes(selectedProvince)) {
      provinceFilter.value = selectedProvince;
    }
  }

  if (districtFilter) {
    districtFilter.innerHTML = '<option value="All">All districts</option>' + districts.map((district) => `<option value="${district}">${district}</option>`).join('');
  }

  if (townFilter) {
    townFilter.innerHTML = '<option value="All">All towns</option>' + towns.map((town) => `<option value="${town}">${town}</option>`).join('');
  }

  const applyFilters = () => {
    const provinceValue = provinceFilter ? provinceFilter.value : 'All';
    const districtValue = districtFilter ? districtFilter.value : 'All';
    const townValue = townFilter ? townFilter.value : 'All';
    const schoolTypeValue = schoolTypeFilter ? schoolTypeFilter.value : 'All';
    const searchValue = searchField ? searchField.value.trim().toLowerCase() : '';

    const filtered = schoolDirectory.filter((school) => {
      const provinceMatch = provinceValue === 'All' || school.province === provinceValue;
      const districtMatch = districtValue === 'All' || school.district === districtValue;
      const townMatch = townValue === 'All' || school.town === townValue;
      const typeMatch = schoolTypeValue === 'All' || school.category === schoolTypeValue;
      const searchMatch = !searchValue || [school.name, school.province, school.district, school.town].some((value) => value.toLowerCase().includes(searchValue));
      return provinceMatch && districtMatch && townMatch && typeMatch && searchMatch;
    });

    const cards = filtered.map((school) => `
      <article class="school-card">
        <div>
          <div class="school-meta">
            <span class="tag">${school.type}</span>
            <span class="tag">${school.category}</span>
            <span class="tag">${school.province}</span>
          </div>
          <h3>${school.name}</h3>
        </div>

        <p><strong>Location:</strong> ${school.town}, ${school.district}</p>
        <p><strong>Mode:</strong> ${school.category}</p>
        <p><strong>Admission:</strong> ${school.admission}</p>

        <ul>
          <li>${school.services.join(' • ')}</li>
          <li>${school.address}</li>
          <li>${school.contact}</li>
        </ul>

        <button type="button" class="btn btn-primary enrollment-btn" data-school-name="${school.name}">Apply now</button>
      </article>
    `).join('');

    resultsContainer.innerHTML = cards || '<p class="filter-note">No schools matched your selected filters.</p>';

    if (countLabel) {
      countLabel.textContent = `${filtered.length} schools found`;
    }
  };

  [provinceFilter, districtFilter, townFilter, schoolTypeFilter, searchField].forEach((element) => {
    if (element) element.addEventListener('input', applyFilters);
    if (element) element.addEventListener('change', applyFilters);
  });

  applyFilters();
}

function setupMapPage() {
  const provinceButtons = document.querySelectorAll('.province-pill');
  const selectedProvinceText = document.getElementById('selectedProvince');
  const mapDetails = document.getElementById('mapDetails');
  const provinceDetail = document.getElementById('provinceDetail');

  if (!selectedProvinceText || !mapDetails) return;

  const renderProvince = (province) => {
    const schools = schoolDirectory.filter((school) => school.province === province);
    const towns = [...new Set(schools.map((school) => school.town))];
    const districts = [...new Set(schools.map((school) => school.district))];
    const boardingCount = schools.filter((school) => school.category === 'Boarding').length;
    const dayCount = schools.filter((school) => school.category === 'Day').length;

    selectedProvinceText.textContent = province;
    provinceDetail.innerHTML = `
      <h3>${province}</h3>
      <p>${districts.length} districts • ${towns.length} towns • ${schools.length} schools listed</p>
      <div class="map-grid province-stats">
        <div class="map-box">
          <h3>Boarding schools</h3>
          <p>${boardingCount}</p>
        </div>
        <div class="map-box">
          <h3>Day schools</h3>
          <p>${dayCount}</p>
        </div>
        <div class="map-box">
          <h3>Province totals</h3>
          <p>${schools.length} schools</p>
        </div>
      </div>
    `;

    mapDetails.innerHTML = `
      <div class="map-grid">
        <div class="map-box">
          <h3>Districts</h3>
          <p>${districts.join(', ')}</p>
        </div>
        <div class="map-box">
          <h3>Major towns</h3>
          <p>${towns.join(', ')}</p>
        </div>
      </div>

      <div class="school-results">
        ${schools.map((school) => `
          <article class="school-card">
            <div class="school-meta">
              <span class="tag">${school.type}</span>
              <span class="tag">${school.category}</span>
            </div>
            <h3>${school.name}</h3>
            <p><strong>Town:</strong> ${school.town}</p>
            <p><strong>District:</strong> ${school.district}</p>
            <p><strong>Admission:</strong> ${school.admission}</p>
            <ul>
              <li>${school.services.join(' • ')}</li>
              <li>${school.contact}</li>
            </ul>
            <button type="button" class="btn btn-primary enrollment-btn" data-school-name="${school.name}">Apply now</button>
          </article>
        `).join('')}
      </div>
    `;
  };

  const defaultProvince = provinceList[0];
  renderProvince(defaultProvince);

  provinceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const province = button.dataset.province;
      provinceButtons.forEach((item) => item.classList.toggle('active', item === button));
      renderProvince(province);
    });
  });
}

function setupContactForms() {
  const forms = document.querySelectorAll('form[data-contact-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      const nameField = form.querySelector('input[name="name"]');
      const name = nameField ? nameField.value.trim() : 'there';

      if (status) {
        status.textContent = `Thank you, ${name}! Your message has been saved locally for review.`;
        status.style.color = '#0d7a63';
      }

      form.reset();
    });
  });
}

setupMobileNav();
setupYear();
setupHomeSearch();
setupEnrollmentModal();
setupSchoolDirectory();
setupMapPage();
setupContactForms();
