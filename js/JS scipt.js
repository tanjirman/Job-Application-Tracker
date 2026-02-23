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