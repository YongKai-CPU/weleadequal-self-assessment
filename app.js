"use strict";

const CONFIG = {
  instagramUrl: "https://www.instagram.com/weleadequal/",
  campaignName: "WeLeadEqual"
};

const QUESTIONS = [
  {
    topic: "Fair recruitment",
    area: "Recruitment",
    scenario: "During an interview, a candidate is asked whether she plans to have children because the role sometimes requires evening work.",
    prompt: "What is the fairest response from the interviewer?",
    options: [
      {
        text: "Continue with the question because family plans may affect availability.",
        score: 0,
        feedback: "Family-planning assumptions can introduce gender bias and distract from the requirements of the role."
      },
      {
        text: "Explain the role requirements and ask every candidate the same job-related availability question.",
        score: 10,
        feedback: "This keeps the decision competency-based and applies the same relevant standard to every candidate."
      },
      {
        text: "Remove the question but privately assume that the candidate may be less available.",
        score: 5,
        feedback: "Removing the question helps, but an untested assumption can still influence the hiring decision."
      }
    ],
    actionTitle: "Use competency-based interviews",
    action: "Write role-related questions in advance and apply the same scoring criteria to every candidate.",
    posts: "Related topics: Fair Recruitment and Gender-Neutral Job Advertisements"
  },
  {
    topic: "Inclusive job advertisements",
    area: "Recruitment",
    scenario: "A technology job advertisement repeatedly asks for an “aggressive rockstar” who can dominate a competitive environment.",
    prompt: "What should the hiring team do before publishing it?",
    options: [
      {
        text: "Publish it because strong language attracts confident applicants.",
        score: 0,
        feedback: "Gender-coded or exclusionary wording may discourage qualified people from applying."
      },
      {
        text: "Add an equal-opportunity sentence but leave the rest of the wording unchanged.",
        score: 5,
        feedback: "A statement helps, but it does not remove wording that may signal a narrow idea of who belongs."
      },
      {
        text: "Rewrite it around essential skills, responsibilities and measurable requirements.",
        score: 10,
        feedback: "Skills-based, neutral wording helps candidates judge fit using relevant evidence."
      }
    ],
    actionTitle: "Write inclusive job criteria",
    action: "Replace personality-coded terms with essential competencies and remove requirements that are not necessary.",
    posts: "Related topic: Gender-Neutral Job Advertisements"
  },
  {
    topic: "The broken rung",
    area: "Progression",
    scenario: "Two employees seek a first management opportunity. One has stronger results, while the other is described as looking more naturally confident.",
    prompt: "How should the promotion decision be made?",
    options: [
      {
        text: "Choose the person who appears most confident in informal meetings.",
        score: 0,
        feedback: "Subjective ideas about leadership presence can reproduce perception bias at the first step into management."
      },
      {
        text: "Ask managers to discuss both candidates without using a shared scoring method.",
        score: 5,
        feedback: "Discussion can add context, but inconsistent criteria still allow personal impressions to dominate."
      },
      {
        text: "Use published criteria, documented evidence and a consistent assessment panel.",
        score: 10,
        feedback: "Transparent criteria make the first management step more defensible and fair."
      }
    ],
    actionTitle: "Make progression criteria visible",
    action: "Publish the competencies required for promotion and record evidence against the same rubric for all candidates.",
    posts: "Related topic: The Broken Rung"
  },
  {
    topic: "Objective performance reviews",
    area: "Progression",
    scenario: "A woman who challenges a decision is described as bossy, while a man showing similar behaviour is praised as decisive.",
    prompt: "What is the most appropriate review action?",
    options: [
      {
        text: "Keep both descriptions because different managers may interpret behaviour differently.",
        score: 0,
        feedback: "Accepting inconsistent labels can turn a perception double standard into a formal performance record."
      },
      {
        text: "Remove the word bossy but leave the ratings and supporting evidence unchanged.",
        score: 5,
        feedback: "Changing one word helps tone, but the team should also check whether the rating itself reflects a double standard."
      },
      {
        text: "Recalibrate both reviews using the same behavioural examples and measurable outcomes.",
        score: 10,
        feedback: "Consistent evidence reduces the influence of gendered labels in performance decisions."
      }
    ],
    actionTitle: "Calibrate performance reviews",
    action: "Require concrete examples, compare language across reviews and use one behavioural standard for everyone.",
    posts: "Related topic: Objective Performance Reviews"
  },
  {
    topic: "Salary transparency",
    area: "Pay",
    scenario: "Employees in similar roles discover unexplained salary differences, but the organisation has no published pay ranges.",
    prompt: "What should leadership do first?",
    options: [
      {
        text: "Keep salaries confidential and encourage each employee to negotiate individually.",
        score: 0,
        feedback: "Individual negotiation alone can preserve unexplained differences and make patterns difficult to examine."
      },
      {
        text: "Conduct an evidence-based pay review, define salary bands and address unjustified gaps.",
        score: 10,
        feedback: "Structured ranges and a documented review create a clearer basis for identifying and correcting unfair differences."
      },
      {
        text: "Publish broad ranges but do not investigate the existing differences.",
        score: 5,
        feedback: "Ranges improve visibility, but existing gaps still need evidence-based review and action."
      }
    ],
    actionTitle: "Create transparent pay practices",
    action: "Document salary bands, review comparable roles and explain how starting pay and increases are decided.",
    posts: "Related topics: The Gender Pay Gap and Salary Transparency"
  },
  {
    topic: "Flexible work and care",
    area: "Care & flexibility",
    scenario: "An employee requests a flexible schedule to manage care responsibilities while continuing to meet the role’s outcomes.",
    prompt: "How should the manager respond?",
    options: [
      {
        text: "Assess the request consistently using role requirements, outputs and available flexible options.",
        score: 10,
        feedback: "A consistent, outcome-focused review supports flexibility without making assumptions about commitment."
      },
      {
        text: "Approve it temporarily but remove the employee from leadership opportunities.",
        score: 5,
        feedback: "Flexibility should not automatically reduce development or leadership opportunities."
      },
      {
        text: "Reject it because visible office attendance is the clearest sign of commitment.",
        score: 0,
        feedback: "Equating visibility with commitment can disadvantage people with care responsibilities even when outcomes are met."
      }
    ],
    actionTitle: "Evaluate flexibility fairly",
    action: "Use consistent eligibility rules and focus on outputs instead of assumptions about availability or ambition.",
    posts: "Related topics: Unpaid Care Work, Flexible Work, Parental Leave and Career Breaks"
  },
  {
    topic: "Returning after a career break",
    area: "Care & flexibility",
    scenario: "A qualified applicant has a two-year career break for caregiving and meets the essential technical requirements.",
    prompt: "What is the fairest screening decision?",
    options: [
      {
        text: "Reject the application because continuous employment shows greater commitment.",
        score: 0,
        feedback: "Treating a career break as automatic evidence of low commitment can exclude qualified candidates."
      },
      {
        text: "Assess current skills and relevant experience using the same job criteria as other applicants.",
        score: 10,
        feedback: "Current capability and job-relevant evidence provide a fairer basis for selection."
      },
      {
        text: "Ask for a detailed personal explanation before deciding whether to assess technical ability.",
        score: 5,
        feedback: "Context may be relevant, but technical and role-related evidence should not be delayed by unnecessary personal questioning."
      }
    ],
    actionTitle: "Assess returners on current capability",
    action: "Use skills-based screening and avoid treating a care-related employment gap as an automatic negative signal.",
    posts: "Related topic: Returning After a Career Break"
  },
  {
    topic: "Safe reporting",
    area: "Safety & voice",
    scenario: "An employee privately reports repeated sexist jokes by a senior colleague and worries about retaliation.",
    prompt: "What should the organisation do?",
    options: [
      {
        text: "Use a confidential process, explain next steps, limit information sharing and protect against retaliation.",
        score: 10,
        feedback: "Clear, confidential and non-retaliatory handling helps people raise concerns safely."
      },
      {
        text: "Arrange an informal conversation but do not document the concern or explain follow-up.",
        score: 5,
        feedback: "Informal resolution may help in some cases, but the employee still needs clarity, protection and an accountable process."
      },
      {
        text: "Tell the senior colleague who reported it so both people can resolve the issue directly.",
        score: 0,
        feedback: "Unnecessary disclosure can increase the risk of retaliation and discourage future reporting."
      }
    ],
    actionTitle: "Strengthen safe reporting",
    action: "Provide confidential reporting routes, explain investigation steps and enforce protection against retaliation.",
    posts: "Related topic: Safe Reporting"
  },
  {
    topic: "Women in STEM and leadership",
    area: "Leadership",
    scenario: "The only woman on a technology team is invited to a leadership panel mainly to improve its appearance, but she is not included in planning or decisions.",
    prompt: "What would create more meaningful representation?",
    options: [
      {
        text: "Keep the invitation symbolic because visible representation is enough for now.",
        score: 5,
        feedback: "Visibility can matter, but representation without influence risks tokenism."
      },
      {
        text: "Exclude her until there are more women in the team.",
        score: 0,
        feedback: "Waiting for representation to improve on its own does not address access to influence and opportunity."
      },
      {
        text: "Invite her for relevant expertise, include her in decisions and review wider leadership pathways.",
        score: 10,
        feedback: "Meaningful participation combines visibility, expertise, decision-making influence and fair pathways."
      }
    ],
    actionTitle: "Move from tokenism to influence",
    action: "Give people meaningful decision roles and review the structures that determine access to leadership opportunities.",
    posts: "Related topic: Women in STEM and Digital Leadership"
  },
  {
    topic: "Workplace allyship",
    area: "Safety & voice",
    scenario: "A junior woman presents an idea in a meeting. It receives no response, but the same idea is praised when repeated later by a colleague.",
    prompt: "What is the strongest allyship response?",
    options: [
      {
        text: "Acknowledge who introduced the idea and invite her to explain or develop it.",
        score: 10,
        feedback: "Crediting the original contribution supports fair recognition and participation in the decision."
      },
      {
        text: "Mention the situation to her privately after the meeting but do not correct the record.",
        score: 5,
        feedback: "Private support is helpful, but public attribution is needed when recognition was lost publicly."
      },
      {
        text: "Ignore it because the final idea matters more than who raised it.",
        score: 0,
        feedback: "Repeated loss of credit can affect visibility, evaluation and progression even when the idea is adopted."
      }
    ],
    actionTitle: "Practise visible allyship",
    action: "Credit contributions in the moment, invite overlooked voices back into the discussion and share opportunity fairly.",
    posts: "Related topics: Intersectionality and Workplace Allyship"
  }
];

const RESOURCES = [
  {
    icon: "01",
    title: "Competency-based recruitment",
    text: "Prepare job-related questions, use one scoring rubric and avoid assumptions about marriage, pregnancy or care.",
    posts: "Fair Recruitment • Gender-Neutral Job Advertisements",
    notice: "Look for personal questions, vague ideas of ‘fit’, coded wording and different standards being applied to similar candidates.",
    actions: ["Define essential competencies before advertising.", "Ask every candidate the same core questions.", "Record evidence against a shared scoring rubric."]
  },
  {
    icon: "02",
    title: "Fair promotion and reviews",
    text: "Publish criteria, request evidence and compare language and ratings for inconsistent standards.",
    posts: "The Broken Rung • Objective Performance Reviews",
    notice: "Watch for confidence being treated as competence, unequal access to stretch assignments and gendered labels such as ‘bossy’.",
    actions: ["Publish promotion requirements.", "Use measurable examples in reviews.", "Calibrate ratings across managers before decisions are final."]
  },
  {
    icon: "03",
    title: "Salary transparency",
    text: "Define pay bands, explain decisions and investigate differences between comparable roles.",
    posts: "The Gender Pay Gap • Salary Transparency",
    notice: "Unexplained salary differences can remain hidden when starting pay, ranges and increase decisions are unclear.",
    actions: ["Document salary bands and role levels.", "Compare work of equal value.", "Investigate and address gaps that cannot be justified by relevant evidence."]
  },
  {
    icon: "04",
    title: "Care, flexibility and career breaks",
    text: "Assess output and capability consistently without treating care responsibilities as low commitment.",
    posts: "Unpaid Care Work • Flexible Work • Parental Leave • Career Breaks",
    notice: "Check whether visibility, continuous employment or use of leave is being treated as a substitute for actual performance and capability.",
    actions: ["Use consistent flexible-work criteria.", "Protect access to development and promotion.", "Assess returners using current skills and role requirements."]
  },
  {
    icon: "05",
    title: "Women in STEM leadership",
    text: "Create pathways to influence and decision-making instead of relying on symbolic representation.",
    posts: "Women in STEM and Digital Leadership",
    notice: "Representation becomes tokenism when someone is visible but excluded from planning, authority, resources or credit.",
    actions: ["Assign meaningful decision roles.", "Provide sponsorship and development opportunities.", "Review who receives high-visibility technical work."]
  },
  {
    icon: "06",
    title: "Intersectional inclusion",
    text: "Consider how gender interacts with disability, ethnicity, age, care, income and other experiences.",
    posts: "Intersectionality",
    notice: "A single average may hide different barriers experienced by groups of women with different identities or circumstances.",
    actions: ["Invite varied perspectives safely.", "Check whether policies work for different groups.", "Use anonymised, proportionate evidence where appropriate."]
  },
  {
    icon: "07",
    title: "Safe reporting",
    text: "Offer confidential routes, clear follow-up and protection against retaliation.",
    posts: "Safe Reporting",
    notice: "People may stay silent when reporting routes are unclear, confidentiality is weak or retaliation appears possible.",
    actions: ["Explain available reporting routes.", "Limit information sharing to those who need it.", "Communicate follow-up and protection against retaliation."]
  },
  {
    icon: "08",
    title: "Workplace allyship",
    text: "Notice unequal patterns, credit contributions and use influence to widen access to opportunity.",
    posts: "Workplace Allyship",
    notice: "Ideas, visibility and opportunities may be distributed unequally even when no one openly intends to exclude others.",
    actions: ["Credit the original contributor.", "Invite overlooked voices into discussion.", "Share information, networks and opportunities fairly."]
  },
  {
    icon: "09",
    title: "Awareness conversations and town halls",
    text: "Create structured spaces where people can learn, ask questions and identify improvements without singling out individuals.",
    posts: "Workplace Allyship • Safe Reporting • WeLeadEqual Digital Tool",
    notice: "One-off awareness messages have limited value if participants cannot ask questions, discuss examples or see follow-up action.",
    actions: ["Set a clear topic and respectful ground rules.", "Use realistic scenarios rather than personal accusations.", "Record themes and communicate agreed follow-up actions."]
  }
];

const OFFICIAL_SOURCES = [
  {
    organisation: "United Nations Statistics Division",
    title: "Official metadata for SDG indicator 5.5.2",
    text: "Defines indicator 5.5.2 as the proportion of women in managerial positions and connects it to equal opportunities for leadership.",
    url: "https://unstats.un.org/sdgs/metadata/files/Metadata-05-05-02.pdf"
  },
  {
    organisation: "International Labour Organization",
    title: "Discrimination (Employment and Occupation) Convention, 1958 (No. 111)",
    text: "Sets out equality of opportunity and treatment in employment and occupation and addresses discrimination based on sex and other grounds.",
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB%3A12100%3A0%3A%3ANO%3A%3AP12100_ILO_CODE%3AC111"
  },
  {
    organisation: "International Labour Organization",
    title: "Equal Remuneration Convention, 1951 (No. 100)",
    text: "Supports the principle of equal remuneration for women and men for work of equal value.",
    url: "https://www.ilo.org/resource/convention-100-and-international-womens-day"
  },
  {
    organisation: "International Labour Organization",
    title: "Workers with Family Responsibilities Convention, 1981 (No. 156)",
    text: "Addresses equality of opportunity and treatment for workers with family responsibilities.",
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB%3A12100%3A0%3A%3ANO%3A%3AP12100_ILO_CODE%3AC156"
  },
  {
    organisation: "International Labour Organization",
    title: "Violence and Harassment Convention, 2019 (No. 190)",
    text: "Includes safe and effective reporting, protection against retaliation, privacy and confidentiality considerations.",
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB%3A12100%3A0%3A%3ANO%3A%3AP12100_ILO_CODE%3AC190"
  }
];

const FEEDBACK_QUESTIONS = [
  "Were the purpose and instructions clear?",
  "Were the workplace scenarios understandable and realistic?",
  "Did the navigation, feedback and final result work correctly?",
  "Were the recommended actions useful and respectful?",
  "Was the tool easy to use on your phone or computer?",
  "What is the single most important improvement you would suggest?"
];

const MAINTENANCE_ACTIONS = [
  {
    actionTitle: "Check outcomes, not policies alone",
    action: "Review whether recruitment, pay, development and promotion outcomes match the organisation’s stated equality practices.",
    posts: "Related topics: The Gender Pay Gap • The Broken Rung • Objective Performance Reviews"
  },
  {
    actionTitle: "Invite safe feedback",
    action: "Ask employees or participants whether processes feel clear, consistent and safe, then document the follow-up action.",
    posts: "Related topics: Safe Reporting • Workplace Allyship"
  },
  {
    actionTitle: "Keep accountability visible",
    action: "Assign owners, review progress regularly and communicate what changed instead of treating awareness as a one-time activity.",
    posts: "Related topics: Salary Transparency • WeLeadEqual Digital Tool"
  }
];

const state = {
  currentQuestion: 0,
  answers: Array(QUESTIONS.length).fill(null),
  lastScreen: "home"
};

const screens = [...document.querySelectorAll(".screen")];
const navButtons = [...document.querySelectorAll(".main-nav [data-route], .mobile-nav [data-route]")];
const assessmentForm = document.querySelector("#assessment-form");
const questionNumber = document.querySelector("#question-number");
const questionTotal = document.querySelector("#question-total");
const questionTopic = document.querySelector("#question-topic");
const scenarioText = document.querySelector("#scenario-text");
const questionPrompt = document.querySelector("#question-prompt");
const answerOptions = document.querySelector("#answer-options");
const feedbackPanel = document.querySelector("#answer-feedback");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackText = document.querySelector("#feedback-text");
const feedbackIcon = document.querySelector("#feedback-icon");
const progressFill = document.querySelector("#progress-fill");
const progressText = document.querySelector("#progress-text");
const progressTrack = document.querySelector(".progress-track");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const scoreRing = document.querySelector("#score-ring");
const scoreNumber = document.querySelector("#score-number");
const resultsTitle = document.querySelector("#results-title");
const resultSummary = document.querySelector("#result-summary");
const priorityActions = document.querySelector("#priority-actions");
const scoreBreakdown = document.querySelector("#score-breakdown");
const responseReview = document.querySelector("#response-review");
const shareStatus = document.querySelector("#share-status");
const resourceGrid = document.querySelector("#resource-grid");
const sourceGrid = document.querySelector("#source-grid");
const feedbackQuestionList = document.querySelector("#feedback-question-list");
const feedbackCopyStatus = document.querySelector("#feedback-copy-status");
const instagramButtons = [...document.querySelectorAll("[data-instagram-link]")];
const instagramHelper = document.querySelector("#instagram-helper");
const privacyDialog = document.querySelector("#privacy-dialog");

function showScreen(route, moveFocus = true, historyMode = "push") {
  const availableRoutes = ["home", "assessment", "results", "resources", "about"];
  const safeRoute = availableRoutes.includes(route) ? route : "home";

  screens.forEach((screen) => {
    screen.hidden = screen.id !== `screen-${safeRoute}`;
  });

  navButtons.forEach((button) => {
    if (button.dataset.route === safeRoute || (safeRoute === "results" && button.dataset.route === "assessment")) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  state.lastScreen = safeRoute;
  const destinationHash = `#${safeRoute}`;
  if (historyMode === "replace") {
    history.replaceState({ screen: safeRoute }, "", destinationHash);
  } else if (historyMode === "push" && window.location.hash !== destinationHash) {
    history.pushState({ screen: safeRoute }, "", destinationHash);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (moveFocus) {
    window.setTimeout(() => document.querySelector("#main-content").focus(), 30);
  }
}

function startAssessment() {
  state.currentQuestion = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  renderQuestion();
  showScreen("assessment");
}

function resumeAssessment() {
  renderQuestion();
  showScreen("assessment");
}

function renderQuestion() {
  const question = QUESTIONS[state.currentQuestion];
  const selected = state.answers[state.currentQuestion];
  const progress = Math.round(((state.currentQuestion + 1) / QUESTIONS.length) * 100);

  questionNumber.textContent = state.currentQuestion + 1;
  questionTotal.textContent = QUESTIONS.length;
  questionTopic.textContent = question.topic;
  scenarioText.textContent = question.scenario;
  questionPrompt.textContent = question.prompt;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", progress);
  backButton.disabled = state.currentQuestion === 0;
  nextButton.textContent = state.currentQuestion === QUESTIONS.length - 1 ? "View results" : "Next question";
  nextButton.disabled = selected === null;
  answerOptions.innerHTML = "";

  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = `answer-option${selected === index ? " selected" : ""}`;
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}" ${selected === index ? "checked" : ""}>
      <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
      <span class="option-copy">${option.text}</span>
    `;
    label.querySelector("input").addEventListener("change", () => selectAnswer(index));
    answerOptions.appendChild(label);
  });

  if (selected === null) {
    feedbackPanel.hidden = true;
  } else {
    renderFeedback(question.options[selected]);
  }
}

function selectAnswer(index) {
  state.answers[state.currentQuestion] = index;
  [...answerOptions.querySelectorAll(".answer-option")].forEach((option, optionIndex) => {
    option.classList.toggle("selected", optionIndex === index);
  });
  nextButton.disabled = false;
  renderFeedback(QUESTIONS[state.currentQuestion].options[index]);
}

function renderFeedback(option) {
  const type = option.score === 10 ? "strong" : option.score === 5 ? "developing" : "learning";
  const title = option.score === 10 ? "Bias-aware response" : option.score === 5 ? "Partly bias-aware" : "Learning opportunity";
  const icon = option.score === 10 ? "✓" : option.score === 5 ? "~" : "!";

  feedbackPanel.className = `answer-feedback ${type}`;
  feedbackPanel.hidden = false;
  feedbackTitle.textContent = title;
  feedbackText.textContent = option.feedback;
  feedbackIcon.textContent = icon;
}

function submitQuestion(event) {
  event.preventDefault();
  if (state.answers[state.currentQuestion] === null) return;

  if (state.currentQuestion < QUESTIONS.length - 1) {
    state.currentQuestion += 1;
    renderQuestion();
    document.querySelector("#assessment-title").focus?.();
  } else {
    renderResults();
    showScreen("results");
  }
}

function calculateScore() {
  return state.answers.reduce((total, answer, index) => {
    if (answer === null) return total;
    return total + QUESTIONS[index].options[answer].score;
  }, 0);
}

function resultProfile(score) {
  if (score >= 80) {
    return {
      title: "Bias-aware leadership",
      summary: "Your responses show a strong awareness of fair, competency-based workplace decisions. Continue checking outcomes, inviting feedback and improving any areas where practice is inconsistent."
    };
  }
  if (score >= 55) {
    return {
      title: "Developing awareness",
      summary: "You identified several fair responses, while some scenarios show opportunities to replace informal assumptions with clearer criteria, evidence and safe processes."
    };
  }
  return {
    title: "More learning recommended",
    summary: "Some everyday workplace practices can unintentionally limit fair participation. Use the priority actions below as a supportive starting point for reflection and improvement."
  };
}

function responseLevel(score) {
  if (score === 10) return { className: "strong", label: "Bias-aware" };
  if (score === 5) return { className: "developing", label: "Partly aware" };
  return { className: "learning", label: "Learning opportunity" };
}

function chooseRecommendedActions(selectedResults, score) {
  if (score === 100) return MAINTENANCE_ACTIONS;

  const sorted = [...selectedResults].sort((a, b) => a.score - b.score || a.index - b.index);
  const selected = [];
  const usedAreas = new Set();

  sorted.forEach((item) => {
    if (selected.length < 3 && item.score < 10 && !usedAreas.has(item.area)) {
      selected.push(item);
      usedAreas.add(item.area);
    }
  });

  sorted.forEach((item) => {
    if (selected.length < 3 && !selected.includes(item)) selected.push(item);
  });

  return selected.slice(0, 3);
}

function renderResults() {
  const score = calculateScore();
  const profile = resultProfile(score);
  const selectedResults = QUESTIONS.map((question, index) => {
    const selectedIndex = state.answers[index];
    const selectedOption = question.options[selectedIndex];
    return {
      ...question,
      index,
      selectedIndex,
      selectedText: selectedOption.text,
      selectedFeedback: selectedOption.feedback,
      score: selectedOption.score
    };
  });

  scoreNumber.textContent = score;
  scoreRing.style.setProperty("--score", `${score * 3.6}deg`);
  scoreRing.setAttribute("aria-label", `Assessment score ${score} out of 100`);
  resultsTitle.textContent = profile.title;
  resultSummary.textContent = profile.summary;
  shareStatus.textContent = "";

  const priorities = chooseRecommendedActions(selectedResults, score);

  priorityActions.innerHTML = priorities.map((item, index) => `
    <article class="priority-card">
      <span aria-hidden="true">${index + 1}</span>
      <div>
        <h3>${item.actionTitle}</h3>
        <p>${item.action}</p>
        <p><strong>${item.posts}</strong></p>
      </div>
    </article>
  `).join("");

  const areas = [...new Set(QUESTIONS.map((question) => question.area))];
  scoreBreakdown.innerHTML = areas.map((area) => {
    const items = selectedResults.filter((item) => item.area === area);
    const earned = items.reduce((total, item) => total + item.score, 0);
    const maximum = items.length * 10;
    const percent = Math.round((earned / maximum) * 100);
    return `
      <div class="breakdown-row">
        <strong>${area}</strong>
        <span>${earned}/${maximum}</span>
        <div class="breakdown-bar" aria-label="${area}: ${percent}%"><i style="width:${percent}%"></i></div>
      </div>
    `;
  }).join("");

  responseReview.innerHTML = selectedResults.map((item, index) => {
    const level = responseLevel(item.score);
    return `
      <details class="review-item">
        <summary>
          <span class="review-summary-copy">
            <span>${index + 1}. ${item.topic}</span>
            <span class="review-score ${level.className}">${item.score}/10 · ${level.label}</span>
          </span>
        </summary>
        <div class="review-detail">
          <p><strong>Scenario:</strong> ${item.scenario}</p>
          <p><strong>Your final response:</strong> ${item.selectedText}</p>
          <p><strong>Learning feedback:</strong> ${item.selectedFeedback}</p>
          <p><strong>Practical action:</strong> ${item.action}</p>
          <p><strong>${item.posts}</strong></p>
        </div>
      </details>
    `;
  }).join("");
}

function renderResources() {
  resourceGrid.innerHTML = RESOURCES.map((resource) => `
    <article class="resource-card">
      <span class="resource-icon" aria-hidden="true">${resource.icon}</span>
      <div>
        <h2>${resource.title}</h2>
        <p>${resource.text}</p>
        <span class="resource-topic">${resource.posts}</span>
        <details>
          <summary>See practical guidance</summary>
          <div class="resource-detail">
            <h3>What to notice</h3>
            <p>${resource.notice}</p>
            <h3>Actions to consider</h3>
            <ul>${resource.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
          </div>
        </details>
      </div>
    </article>
  `).join("");

  sourceGrid.innerHTML = OFFICIAL_SOURCES.map((source) => `
    <article class="source-card">
      <span class="resource-topic">${source.organisation}</span>
      <h3>${source.title}</h3>
      <p>${source.text}</p>
      <a href="${source.url}" target="_blank" rel="noopener noreferrer">Open official source <span aria-hidden="true">↗</span></a>
    </article>
  `).join("");

  feedbackQuestionList.innerHTML = FEEDBACK_QUESTIONS.map((question) => `<li>${question}</li>`).join("");
}

async function copyPlainText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();
  if (!copied) throw new Error("Copy command unavailable");
}

async function shareResult() {
  const score = calculateScore();
  const profile = resultProfile(score);
  const shareText = `My WeLeadEqual workplace-bias awareness result: ${score}/100 — ${profile.title}. Explore fairer workplace decisions with WeLeadEqual.`;
  const publicUrl = /^https?:$/i.test(window.location.protocol) ? window.location.href : "";

  try {
    if (navigator.share) {
      const shareData = { title: "WeLeadEqual result", text: shareText };
      if (publicUrl) shareData.url = publicUrl;
      await navigator.share(shareData);
      shareStatus.textContent = publicUrl
        ? "Share options opened. Your individual answers are not included."
        : "Result text opened for sharing. Add the public tool URL after deployment.";
    } else {
      await copyPlainText(`${shareText}${publicUrl ? ` ${publicUrl}` : ""}`);
      shareStatus.textContent = publicUrl
        ? "Result summary copied. Your individual answers were not included."
        : "Result summary copied without the local file address. Add the public URL after deployment.";
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      shareStatus.textContent = "Sharing was unavailable on this device. You can take a screenshot of the result instead.";
    }
  }
}

function setupInstagramLink() {
  if (!CONFIG.instagramUrl) {
    instagramButtons.forEach((button) => {
      button.disabled = true;
      button.textContent = "Instagram link to be added";
    });
    return;
  }

  instagramButtons.forEach((button) => {
    button.disabled = false;
    button.textContent = button.dataset.instagramLabel || `Open ${CONFIG.campaignName} on Instagram`;
    button.addEventListener("click", () => {
      window.open(CONFIG.instagramUrl, "_blank", "noopener,noreferrer");
    });
  });
  instagramHelper.textContent = "Continue learning through the project's Instagram campaign topics.";
}

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => {
    const route = button.dataset.route;
    if (route === "assessment") {
      if (state.answers.every((answer) => answer !== null)) {
        renderResults();
        showScreen("results");
      } else if (state.answers.some((answer) => answer !== null)) {
        resumeAssessment();
      } else {
        startAssessment();
      }
      return;
    }
    showScreen(route);
  });
});

document.querySelectorAll("[data-start-assessment]").forEach((button) => {
  button.addEventListener("click", startAssessment);
});

assessmentForm.addEventListener("submit", submitQuestion);
backButton.addEventListener("click", () => {
  if (state.currentQuestion > 0) {
    state.currentQuestion -= 1;
    renderQuestion();
  }
});

document.querySelector("#retake-assessment").addEventListener("click", startAssessment);
document.querySelector("#share-result").addEventListener("click", shareResult);
document.querySelector("#copy-feedback-questions").addEventListener("click", async () => {
  const feedbackTextBlock = [
    "WeLeadEqual user feedback",
    "Please do not include your name, employer or other personal information.",
    "",
    ...FEEDBACK_QUESTIONS.map((question, index) => `${index + 1}. ${question}`)
  ].join("\n");

  try {
    await copyPlainText(feedbackTextBlock);
    feedbackCopyStatus.textContent = "Feedback questions copied. No answers were submitted by this webpage.";
  } catch {
    feedbackCopyStatus.textContent = "Copying was unavailable. You can select the questions manually instead.";
  }
});
document.querySelector("#print-result").addEventListener("click", () => window.print());
document.querySelector("#print-checklist").addEventListener("click", () => {
  document.body.classList.add("print-checklist");
  window.print();
});
window.addEventListener("afterprint", () => document.body.classList.remove("print-checklist"));
document.querySelector("#privacy-button").addEventListener("click", () => privacyDialog.showModal());
document.querySelector("#close-dialog").addEventListener("click", () => privacyDialog.close());
document.querySelector("#accept-dialog").addEventListener("click", () => privacyDialog.close());
privacyDialog.addEventListener("click", (event) => {
  if (event.target === privacyDialog) privacyDialog.close();
});

renderResources();
setupInstagramLink();

const initialRoute = window.location.hash.replace("#", "");
if (initialRoute === "assessment") {
  renderQuestion();
  showScreen("assessment", false, "replace");
} else if (["home", "resources", "about"].includes(initialRoute)) {
  showScreen(initialRoute, false, "replace");
} else {
  showScreen("home", false, "replace");
}

window.addEventListener("popstate", () => {
  const route = window.location.hash.replace("#", "") || "home";

  if (route === "assessment") {
    renderQuestion();
    showScreen("assessment", false, "none");
  } else if (route === "results" && state.answers.every((answer) => answer !== null)) {
    renderResults();
    showScreen("results", false, "none");
  } else if (["home", "resources", "about"].includes(route)) {
    showScreen(route, false, "none");
  } else {
    showScreen("home", false, "replace");
  }
});

window.WeLeadEqualTest = {
  questions: QUESTIONS,
  state,
  calculateScore,
  resultProfile,
  startAssessment,
  renderResults
};
