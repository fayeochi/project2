// JavaScript for a clickable progress bar with Bootstrap classes
const progressSteps = document.querySelectorAll(".progress-step");
const formSteps = document.querySelectorAll(".form-step");

progressSteps.forEach((step, index) => {
  step.addEventListener("click", (e) => {
    e.preventDefault();
    formStepsNum = index;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((step, idx) => {
    if (idx <= formStepsNum) {
      step.classList.add("progress-step-active");
    } else {
      step.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");
  const width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  progress.style.width = width;
}
