// Dashboard count

const total = document.getElementById('totalCount');
const total2 = document.getElementById('totalCount2');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const jobCards = document.getElementById('jobCards');

const tabs = {
  All: document.getElementById('allTab'),
  Interview: document.getElementById('interviewTab'),
  Rejected: document.getElementById('rejectedTab')
};

// Dashboard count increment & decrement

function updateDashboard() {
  const cards = document.querySelectorAll('.card');

  let interview = 0;
  let rejected = 0;

  cards.forEach(card => {
    const status = card.querySelector('.badge').innerText;

    if (status === "Interview") interview++;
    if (status === "Rejected") rejected++;
  });

  total.innerText = cards.length;
  total2.innerText = cards.length + " jobs";
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}


// toggle function and filter the cards by interview and rejected

function filterCards(type) {
  const cards = document.querySelectorAll('.card');
  const emptyState = document.getElementById('emptyState');
  const emptyTitle = document.getElementById('emptyTitle');
  const emptySubtitle = document.getElementById('emptySubtitle');

  let visible = 0;

  cards.forEach(card => {
    const status = card.querySelector('.badge').innerText;

    const show =
      type === "All" ||
      (type === "Interview" && status === "Interview") ||
      (type === "Rejected" && status === "Rejected");

    card.style.display = show ? "flex" : "none";
    if (show) visible++;
  });

  total2.innerText = visible + " jobs";
  setActiveTab(type);

  
  if (visible === 0 && type !== "All") {
    emptyState.classList.remove("hidden");

    emptyTitle.innerText = "No Jobs Available";
// using ternary operator for toggling the tabs
    emptySubtitle.innerText =
      type === "Interview"
        ? "You have not marked any job as Interview yet."
        : "You have not rejected any job yet.";
  } else {
    emptyState.classList.add("hidden");
  }
}


// active tab

function setActiveTab(activeType) {
  Object.keys(tabs).forEach(type => {
    tabs[type].classList.remove('bg-blue-500', 'text-white');
    tabs[type].classList.add('bg-white', 'text-gray-500');
  });

  tabs[activeType].classList.remove('bg-white', 'text-gray-500');
  tabs[activeType].classList.add('bg-blue-500', 'text-white');
}


//using event delegation for action handle 

jobCards.addEventListener('click', function (e) {

  const card = e.target.closest('.card');
  if (!card) return;

  const badge = card.querySelector('.badge');

  // Interview Click
  if (e.target.closest('.btn-success')) {
    badge.innerText = "Interview";
    badge.className = "badge badge-soft badge-success text-black p-4";
  }

  // Rejected Click
  if (e.target.closest('.btn-error')) {
    badge.innerText = "Rejected";
    badge.className = "badge badge-soft badge-error text-black p-4";
  }

  // Delete Click
  if (e.target.closest('.delete-btn')) {
    card.remove();
  }

  updateDashboard();
});


// tab events

Object.keys(tabs).forEach(type => {
  tabs[type].addEventListener('click', () => filterCards(type));
});


//By default All tab load 
updateDashboard();
filterCards("All");