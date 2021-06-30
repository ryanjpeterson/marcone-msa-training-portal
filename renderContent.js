const webinarGrid = document.querySelector('#webinar-grid');
let htmlMarkup = '';

const webinars = [
  {
    img: 'https://marketing-image-production.s3.amazonaws.com/uploads/523460e6cd6435290b821731c4b604ad15d94bee161ad919dc521778ce5287cea315d79b24efb8585331359fc369fa4800c0b176c977e4f0f6bb13eafffa35ad.png',
    name: 'LG Front Load Washer WM3570H*A/WM3770H*A',
    language: 'English',
    host: 'Rick Kuemin',
    description: `Diagnostics and repair of the WM3570H*A/WM3770H*A LG Front Load
        Washer`,
    dates: [
      'Wednesday, March 24th, 8:30am - 10:30am',
      'Thursday, March 25th, 5:00pm - 7:00pm',
    ],
    registrationURL: 'https://register.gotowebinar.com/rt/1942609860780894475',
  },
  {
    img: 'https://marketing-image-production.s3.amazonaws.com/uploads/523460e6cd6435290b821731c4b604ad15d94bee161ad919dc521778ce5287cea315d79b24efb8585331359fc369fa4800c0b176c977e4f0f6bb13eafffa35ad.png',
    name: 'LG Front Load Washer WM3570H*A/WM3770H*A',
    language: 'English',
    host: 'Rick Kuemin',
    description: `Diagnostics and repair of the WM3570H*A/WM3770H*A LG Front Load
        Washer`,
    dates: [
      'Wednesday, March 24th, 8:30am - 10:30am',
      'Thursday, March 25th, 5:00pm - 7:00pm',
    ],
    registrationURL: 'https://register.gotowebinar.com/rt/1942609860780894475',
  },
  {
    img: 'https://marketing-image-production.s3.amazonaws.com/uploads/523460e6cd6435290b821731c4b604ad15d94bee161ad919dc521778ce5287cea315d79b24efb8585331359fc369fa4800c0b176c977e4f0f6bb13eafffa35ad.png',
    name: 'LG Front Load Washer WM3570H*A/WM3770H*A',
    language: 'English',
    host: 'Rick Kuemin',
    description: `Diagnostics and repair of the WM3570H*A/WM3770H*A LG Front Load
        Washer`,
    dates: [
      'Wednesday, March 24th, 8:30am - 10:30am',
      'Thursday, March 25th, 5:00pm - 7:00pm',
    ],
    registrationURL: 'https://register.gotowebinar.com/rt/1942609860780894475',
  },
  {
    img: 'https://marketing-image-production.s3.amazonaws.com/uploads/523460e6cd6435290b821731c4b604ad15d94bee161ad919dc521778ce5287cea315d79b24efb8585331359fc369fa4800c0b176c977e4f0f6bb13eafffa35ad.png',
    name: 'LG Front Load Washer WM3570H*A/WM3770H*A',
    language: 'English',
    host: 'Rick Kuemin',
    description: `Diagnostics and repair of the WM3570H*A/WM3770H*A LG Front Load
        Washer`,
    dates: [
      'Wednesday, March 24th, 8:30am - 10:30am',
      'Thursday, March 25th, 5:00pm - 7:00pm',
    ],
    registrationURL: 'https://register.gotowebinar.com/rt/1942609860780894475',
  },
  {
    img: 'https://marketing-image-production.s3.amazonaws.com/uploads/523460e6cd6435290b821731c4b604ad15d94bee161ad919dc521778ce5287cea315d79b24efb8585331359fc369fa4800c0b176c977e4f0f6bb13eafffa35ad.png',
    name: 'LG Front Load Washer WM3570H*A/WM3770H*A',
    language: 'English',
    host: 'Rick Kuemin',
    description: `Diagnostics and repair of the WM3570H*A/WM3770H*A LG Front Load
        Washer`,
    dates: [
      'Wednesday, March 24th, 8:30am - 10:30am',
      'Thursday, March 25th, 5:00pm - 7:00pm',
    ],
    registrationURL: 'https://register.gotowebinar.com/rt/1942609860780894475',
  },
  {
    img: 'https://marketing-image-production.s3.amazonaws.com/uploads/523460e6cd6435290b821731c4b604ad15d94bee161ad919dc521778ce5287cea315d79b24efb8585331359fc369fa4800c0b176c977e4f0f6bb13eafffa35ad.png',
    name: 'LG Front Load Washer WM3570H*A/WM3770H*A',
    language: 'English',
    host: 'Rick Kuemin',
    description: `Diagnostics and repair of the WM3570H*A/WM3770H*A LG Front Load
        Washer`,
    dates: [
      'Wednesday, March 24th, 8:30am - 10:30am',
      'Thursday, March 25th, 5:00pm - 7:00pm',
    ],
    registrationURL: 'https://register.gotowebinar.com/rt/1942609860780894475',
  },
];

function renderContent(webinar) {
  // Parse array of dates
  let dates = '';

  webinar.dates.forEach(
    (date) =>
      (dates += `<p class="webinar-time">
  <span class="webinar-time__icon"
    ><i class="bi bi-clock-fill"></i></span
  >${date}
</p>`)
  );

  // Create webinar component
  const html = `
    <div class="webinar">
    <div class="webinar-img__container">
      <img
        src="${webinar.img}"
        alt="${webinar.name}"
        class="webinar-img"
      />
    </div>
    <div class="webinar-details">
      <div class="webinar-header">
        <span class="webinar-title">
          ${webinar.name}
        </span>
        <div class="webinar-header__language">${webinar.language}</div>
      </div>
      <p class="webinar-host">
        <span class="webinar-host__icon"
          ><i class="bi bi-person-fill"></i
        ></span>
        Hosted by ${webinar.host}
      </p>
      <p class="webinar-description">
        ${webinar.description}
      </p>
        <div class="webinar-dates__container">
        <div class="webinar-dates__header bold">Session Times (EST)</div>
        <div class="webinar-dates">
            ${dates}
        </div>
      </div>
      <a
        href="${webinar.registrationURL}"
        class="webinar-register"
        target="_blank"
      >
        <span class="webinar-register__icon">
            <i class="bi bi-plus-circle-fill"></i>
        </span>
        Register Now!
      </a>
    </div>
  </div>`;

  return (htmlMarkup += html);
}

function setWebinars() {
  webinars.forEach((webinar) => renderContent(webinar));
  webinarGrid.innerHTML = htmlMarkup;
}

setWebinars();
