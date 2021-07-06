// Init Firebase and empty webinars array
const db = firebase.firestore();
let webinars = [];

// Fetch webinars from Firebase
async function fetchWebinars() {
  await db
    .collection('webinars')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => webinars.push(doc.data()));
    });
}

// Function to render HTML string
function renderContent(webinar) {
  // Parse array of dates
  let dates = '';
  webinar.dates.forEach(
    (date) =>
      (dates += `<p class="webinar-time">
    <div class="webinar-time__container">
      <i class="bi bi-clock-fill"></i>
      <div>
        <p class="webinar-time__item bold">${date.day}</p>
        <p class="webinar-time__item">${date.time}</p>
      </div>
    </div>
  </p>`)
  );

  // Add flag to language div
  let flagURL = '';

  if (webinar.country === 'Canada') {
    flagURL =
      'https://firebasestorage.googleapis.com/v0/b/marcone-msa-training-portal.appspot.com/o/flag-canada.png?alt=media&token=db1a033a-b968-4f4a-981d-81a888cafee8';
  } else {
    flagURL =
      'https://firebasestorage.googleapis.com/v0/b/marcone-msa-training-portal.appspot.com/o/flag-usa.png?alt=media&token=6dc65f80-0fcb-42b0-8ee3-faeea046b690';
  }

  // Parse array of models
  let models = '';
  webinar.models.forEach(
    (model) => (models += `<p class="webinar-model">${model}<p/>`)
  );

  // Create webinar component
  const webinarHTML = `
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
        <div class="webinar-header__region">
            <img class="webinar-header__flag" src="${flagURL}" alt="${webinar.country}" />
            <span class="webinar-header__language">${webinar.language}</span>
        </div>
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
      <div class="webinar-models">
        ${models}
      </div>
        <div class="webinar-dates__container">
        <div class="webinar-dates__header bold">Session Times (${webinar.timeZone})</div>
        <div class="webinar-dates">
        <p class="webinar-time">
        ${dates}
      </p>
        </div>
      </div>
      <a
        href="${webinar.registrationURL}"
        class="webinar-register bold"
        target="_blank"
      >
        <span class="webinar-register__icon">
        <svg
        height="30"
        width="30"
        viewBox="0 0 35 35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M27.6386 18.8602a4.3414 4.3414 0 00-4.7571.1716.871.871 0 01-.937.0462l-4.3083-2.4874a.1056.1056 0 010-.1848l4.2886-2.4742a.871.871 0 01.9435.0528 4.3414 4.3414 0 004.7703.1913c1.9638-1.212 2.653-3.7382 1.5769-5.7797-.98-1.8055-3.0913-2.677-5.0595-2.0885-1.9682.5885-3.2544 2.476-3.0823 4.5231a.871.871 0 01-.4289.8313l-4.3084 2.4874a.1056.1056 0 01-.165-.0923V9.0756a.871.871 0 01.5147-.7852c1.8531-.8525 2.8628-2.8802 2.4265-4.8728C18.6762 1.425 16.9115.005 14.8716.005s-3.8045 1.4201-4.2409 3.4127.5734 4.0203 2.4265 4.8728a.871.871 0 01.5147.7852v4.9814a.1056.1056 0 01-.165.0923L9.0985 11.662a.8643.8643 0 01-.4289-.8313c.1756-2.0323-1.0873-3.9127-3.035-4.519C3.687 5.7053 1.58 6.5368.5711 8.3097c-1.0089 1.773-.6474 4.009.8687 5.3738 1.516 1.3647 3.7778 1.49 5.4352.3009a.871.871 0 01.9435-.0528l4.2886 2.4742a.1056.1056 0 010 .1848L7.7987 19.078a.871.871 0 01-.9369-.0462 4.3414 4.3414 0 00-4.757-.1716C.147 20.0741-.5389 22.5952.5343 24.6334c.9809 1.813 3.1014 2.6863 5.0746 2.0899 1.9731-.5964 3.2549-2.4981 3.0672-4.551a.871.871 0 01.4289-.8379l4.3084-2.4874a.1056.1056 0 01.165.0924v4.9814a.871.871 0 01-.5147.7852c-1.8531.8525-2.8628 2.8801-2.4265 4.8727.4364 1.9927 2.2011 3.4128 4.241 3.4128s3.8045-1.4201 4.2409-3.4128c.4363-1.9926-.5734-4.0202-2.4265-4.8727a.871.871 0 01-.5147-.7852v-4.9814a.1056.1056 0 01.165-.0924l4.3084 2.4874a.871.871 0 01.4289.838c-.1877 2.0528 1.094 3.9545 3.0672 4.5509 1.9732.5964 4.0937-.2769 5.0746-2.09 1.0708-2.0415.379-4.5635-1.5835-5.773z"
            fill="#fff"
          ></path>
        </g>
      </svg>
      
        </span>
        Register Now!
      </a>
    </div>
  </div>`;

  return (content += webinarHTML);
}

// Render HTML in webinar grid
const webinarGrid = document.querySelector('#webinar-grid');
let content = '';

async function loadContent() {
  await fetchWebinars();
  webinars.forEach((webinar) => renderContent(webinar));
  webinarGrid.innerHTML = content;
}

loadContent();
