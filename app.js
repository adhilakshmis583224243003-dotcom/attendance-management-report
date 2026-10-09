/**
 * ATTENDANCE MONITORING AGENT
 * Pure Vanilla JavaScript Architecture - Zero External Framework Bloat
 * High-Precision Academic Attendance Analytics, Risk Assessment, and Alert Dispatch
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DEFAULT DATASET & STATE
  // ==========================================
  const DEFAULT_STUDENTS = [
    { id: "STU101", name: "Aarav Sharma", dept: "Computer Science", subject: "Data Structures", total: 45, attended: 42, streak: 0, parentName: "Rajesh Sharma", parentEmail: "rajesh.sharma@example.com", parentPhone: "+91 98765 43210" },
    { id: "STU102", name: "Ananya Iyer", dept: "Computer Science", subject: "Data Structures", total: 45, attended: 31, streak: 4, parentName: "Venkatesh Iyer", parentEmail: "v.iyer@example.com", parentPhone: "+91 98765 43211" },
    { id: "STU103", name: "Rohan Verma", dept: "Information Tech", subject: "Computer Networks", total: 48, attended: 34, streak: 3, parentName: "Sunil Verma", parentEmail: "sunil.v@example.com", parentPhone: "+91 98765 43212" },
    { id: "STU104", name: "Pooja Patel", dept: "Computer Science", subject: "Database Systems", total: 44, attended: 41, streak: 0, parentName: "Kishore Patel", parentEmail: "k.patel@example.com", parentPhone: "+91 98765 43213" },
    { id: "STU105", name: "Vikram Singh", dept: "Information Tech", subject: "Algorithms", total: 46, attended: 28, streak: 5, parentName: "Mahesh Singh", parentEmail: "m.singh@example.com", parentPhone: "+91 98765 43214" },
    { id: "STU106", name: "Sneha Kulkarni", dept: "Computer Science", subject: "Operating Systems", total: 45, attended: 37, streak: 1, parentName: "Prakash Kulkarni", parentEmail: "p.kulkarni@example.com", parentPhone: "+91 98765 43215" },
    { id: "STU107", name: "Devendra Rao", dept: "Electronics", subject: "Microprocessors", total: 42, attended: 26, streak: 4, parentName: "Srinivas Rao", parentEmail: "s.rao@example.com", parentPhone: "+91 98765 43216" },
    { id: "STU108", name: "Meera Nambiar", dept: "Computer Science", subject: "Machine Learning", total: 45, attended: 44, streak: 0, parentName: "Unni Nambiar", parentEmail: "u.nambiar@example.com", parentPhone: "+91 98765 43217" },
    { id: "STU109", name: "Karthik Nair", dept: "Electronics", subject: "Digital Signal Processing", total: 40, attended: 29, streak: 2, parentName: "Gopinath Nair", parentEmail: "g.nair@example.com", parentPhone: "+91 98765 43218" },
    { id: "STU110", name: "Priyanka Das", dept: "Information Tech", subject: "Cloud Computing", total: 45, attended: 35, streak: 1, parentName: "Subhash Das", parentEmail: "s.das@example.com", parentPhone: "+91 98765 43219" },
    { id: "STU111", name: "Rahul Mehta", dept: "Computer Science", subject: "Data Structures", total: 45, attended: 27, streak: 6, parentName: "Anil Mehta", parentEmail: "anil.mehta@example.com", parentPhone: "+91 98765 43220" },
    { id: "STU112", name: "Divya Pillai", dept: "Information Tech", subject: "Database Systems", total: 44, attended: 38, streak: 0, parentName: "Radhakrishnan Pillai", parentEmail: "r.pillai@example.com", parentPhone: "+91 98765 43221" },
    { id: "STU113", name: "Kabir Joshi", dept: "Computer Science", subject: "Algorithms", total: 46, attended: 33, streak: 2, parentName: "Deepak Joshi", parentEmail: "d.joshi@example.com", parentPhone: "+91 98765 43222" },
    { id: "STU114", name: "Isha Reddy", dept: "Electronics", subject: "Embedded Systems", total: 42, attended: 40, streak: 0, parentName: "Satyanarayana Reddy", parentEmail: "s.reddy@example.com", parentPhone: "+91 98765 43223" },
    { id: "STU115", name: "Arjun Kapoor", dept: "Computer Science", subject: "Computer Networks", total: 48, attended: 32, streak: 4, parentName: "Ramesh Kapoor", parentEmail: "r.kapoor@example.com", parentPhone: "+91 98765 43224" },
    { id: "STU116", name: "Tanvi Bhatt", dept: "Information Tech", subject: "Software Engineering", total: 45, attended: 43, streak: 0, parentName: "Nitin Bhatt", parentEmail: "n.bhatt@example.com", parentPhone: "+91 98765 43225" },
    { id: "STU117", name: "Gautam Sen", dept: "Computer Science", subject: "Machine Learning", total: 45, attended: 30, streak: 3, parentName: "Alok Sen", parentEmail: "alok.sen@example.com", parentPhone: "+91 98765 43226" },
    { id: "STU118", name: "Riya Chawla", dept: "Electronics", subject: "VLSI Design", total: 40, attended: 36, streak: 0, parentName: "Jagdish Chawla", parentEmail: "j.chawla@example.com", parentPhone: "+91 98765 43227" },
    { id: "STU119", name: "Aditya Menon", dept: "Information Tech", subject: "Cybersecurity", total: 44, attended: 29, streak: 4, parentName: "Kishore Menon", parentEmail: "k.menon@example.com", parentPhone: "+91 98765 43228" },
    { id: "STU120", name: "Neha Gupta", dept: "Computer Science", subject: "Database Systems", total: 44, attended: 42, streak: 0, parentName: "Sanjay Gupta", parentEmail: "s.gupta@example.com", parentPhone: "+91 98765 43229" },
    { id: "STU121", name: "Varun Saxena", dept: "Electronics", subject: "Microprocessors", total: 42, attended: 31, streak: 2, parentName: "Ashok Saxena", parentEmail: "a.saxena@example.com", parentPhone: "+91 98765 43230" },
    { id: "STU122", name: "Simran Kaur", dept: "Information Tech", subject: "Cloud Computing", total: 45, attended: 41, streak: 0, parentName: "Gurpreet Kaur", parentEmail: "g.kaur@example.com", parentPhone: "+91 98765 43231" },
    { id: "STU123", name: "Harsh Vardhan", dept: "Computer Science", subject: "Algorithms", total: 46, attended: 31, streak: 3, parentName: "Harish Vardhan", parentEmail: "h.vardhan@example.com", parentPhone: "+91 98765 43232" },
    { id: "STU124", name: "Trisha Roy", dept: "Computer Science", subject: "Operating Systems", total: 45, attended: 45, streak: 0, parentName: "Tapan Roy", parentEmail: "t.roy@example.com", parentPhone: "+91 98765 43233" },
    { id: "STU125", name: "Manish Pandey", dept: "Electronics", subject: "Communication Systems", total: 42, attended: 28, streak: 5, parentName: "Dinesh Pandey", parentEmail: "d.pandey@example.com", parentPhone: "+91 98765 43234" }
  ];

  // Core App State
  const state = {
    students: [],
    criticalThreshold: 75,
    warningThreshold: 80,
    chronicDays: 3,
    activeTab: "tab-roster",
    searchQuery: "",
    activeFilter: "all",
    selectedDept: "all",
    sortField: "id",
    sortAsc: true,
    activeTemplate: "email",
    alertAudience: "critical",
    dispatchedAlerts: new Set(),
    activeDetailStudentId: null,
    tempSimOffset: { attended: 0, total: 0, streak: 0 },
    theme: "dark"
  };

  // ==========================================
  // 2. MATHEMATICAL & AGENT UTILITIES
  // ==========================================

  function calcPercentage(attended, total) {
    if (!total || total <= 0) return 0;
    return Math.round((attended / total) * 1000) / 10;
  }

  function getRiskLevel(pct, streak) {
    if (pct < state.criticalThreshold || streak >= state.chronicDays + 2) {
      return "critical";
    }
    if (pct < state.warningThreshold || streak >= state.chronicDays) {
      return "warning";
    }
    return "safe";
  }

  /**
   * Calculates minimum consecutive classes student must attend to reach target percentage.
   * Formula: (P_req * total - attended) / (1 - P_req)
   */
  function calcClassesNeeded(attended, total, targetPct = state.criticalThreshold) {
    const P = targetPct / 100;
    const currentPct = (attended / total) * 100;
    if (currentPct >= targetPct) return 0;
    const numerator = (P * total) - attended;
    const denominator = 1 - P;
    return Math.max(0, Math.ceil(numerator / denominator));
  }

  /**
   * Calculates how many classes a student can safely miss before dropping below target.
   */
  function calcSafetyMargin(attended, total, targetPct = state.criticalThreshold) {
    const P = targetPct / 100;
    const currentPct = (attended / total) * 100;
    if (currentPct < targetPct) return 0;
    const numerator = attended - (P * total);
    return Math.max(0, Math.floor(numerator / P));
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
    } else if (type === 'danger') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
    } else {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // ==========================================
  // 3. CORE ANALYSIS & METRICS RE-EVALUATION
  // ==========================================
  function runAgentAnalysis() {
    let totalStudents = state.students.length;
    if (totalStudents === 0) return;

    let totalAttended = 0;
    let totalClasses = 0;
    let criticalCount = 0;
    let warningCount = 0;
    let safeCount = 0;
    let chronicCount = 0;

    const analyzedList = state.students.map(s => {
      const pct = calcPercentage(s.attended, s.total);
      const risk = getRiskLevel(pct, s.streak);
      const neededForCrit = calcClassesNeeded(s.attended, s.total, state.criticalThreshold);
      const neededForWarn = calcClassesNeeded(s.attended, s.total, state.warningThreshold);
      const margin = calcSafetyMargin(s.attended, s.total, state.criticalThreshold);

      totalAttended += s.attended;
      totalClasses += s.total;

      if (risk === "critical") criticalCount++;
      else if (risk === "warning") warningCount++;
      else safeCount++;

      if (s.streak >= state.chronicDays) chronicCount++;

      return {
        ...s,
        pct,
        risk,
        neededForCrit,
        neededForWarn,
        margin
      };
    });

    const avgAttendance = totalClasses > 0 ? calcPercentage(totalAttended, totalClasses) : 0;

    // Update KPI Card Displays
    document.getElementById("kpiTotalStudents").textContent = totalStudents;
    document.getElementById("kpiAvgAttendance").textContent = `${avgAttendance}%`;
    document.getElementById("kpiAvgBar").style.width = `${Math.min(100, avgAttendance)}%`;
    document.getElementById("kpiCriticalCount").textContent = criticalCount;
    document.getElementById("kpiWarningCount").textContent = warningCount;
    document.getElementById("kpiSafeCount").textContent = safeCount;

    // Badges & Counter Pills
    document.getElementById("countAll").textContent = totalStudents;
    document.getElementById("countCritical").textContent = criticalCount;
    document.getElementById("countWarning").textContent = warningCount;
    document.getElementById("countSafe").textContent = safeCount;
    document.getElementById("countChronic").textContent = chronicCount;
    document.getElementById("alertsCounterBadge").textContent = criticalCount + warningCount;

    // Agent Diagnostic Bar Text
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById("lastAnalysisTimestamp").textContent = `Evaluated at ${timeStr}`;

    const diff = Math.round((avgAttendance - state.criticalThreshold) * 10) / 10;
    const diffSign = diff >= 0 ? `+${diff}%` : `${diff}%`;
    document.getElementById("kpiAttendanceHealth").textContent = `${diffSign} margin over ${state.criticalThreshold}% statutory bar`;

    document.getElementById("agentDiagnosticText").innerHTML = `
      The Agent analyzed all <strong>${totalStudents} active student records</strong>. 
      <strong>${criticalCount} students</strong> have breached the ${state.criticalThreshold}% policy threshold and risk academic debarment. 
      <strong>${chronicCount} students</strong> have logged &ge;${state.chronicDays} unexcused absences. 
      Recommended: Dispatch formal notifications immediately.
    `;

    // Render Sub-Views
    renderStudentTable(analyzedList);
    renderAlertsFeed(analyzedList);
    renderAnalytics(analyzedList, avgAttendance);
    renderExecutiveReport(analyzedList, avgAttendance, criticalCount, totalStudents);
  }

  // ==========================================
  // 4. STUDENT TABLE RENDERING & FILTERING
  // ==========================================
  function renderStudentTable(analyzedList) {
    const tbody = document.getElementById("studentTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    // Apply Filter
    let filtered = analyzedList.filter(s => {
      // Search Query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const matchName = s.name.toLowerCase().includes(q);
        const matchId = s.id.toLowerCase().includes(q);
        const matchDept = s.dept.toLowerCase().includes(q);
        const matchSub = s.subject.toLowerCase().includes(q);
        if (!matchName && !matchId && !matchDept && !matchSub) return false;
      }

      // Department Filter
      if (state.selectedDept !== "all" && s.dept !== state.selectedDept) {
        return false;
      }

      // Risk Filter Pills
      if (state.activeFilter === "critical") return s.risk === "critical";
      if (state.activeFilter === "warning") return s.risk === "warning";
      if (state.activeFilter === "safe") return s.risk === "safe";
      if (state.activeFilter === "chronic") return s.streak >= state.chronicDays;

      return true;
    });

    // Sort Table
    filtered.sort((a, b) => {
      let valA = a[state.sortField];
      let valB = b[state.sortField];
      if (state.sortField === "percentage") {
        valA = a.pct;
        valB = b.pct;
      } else if (state.sortField === "attendance") {
        valA = a.attended;
        valB = b.attended;
      }

      if (typeof valA === "string") {
        return state.sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return state.sortAsc ? valA - valB : valB - valA;
    });

    document.getElementById("showingCount").textContent = filtered.length;
    document.getElementById("totalCount").textContent = analyzedList.length;

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align:center; padding: 2.5rem; color: var(--text-muted);">
            No student records match the active search and filter criteria.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(s => {
      const tr = document.createElement("tr");

      let pctClass = "good";
      let riskBadge = `<span class="kpi-badge badge-success">Good Standing</span>`;
      let recoveryGoal = `<span class="target-calc-text color-success">&check; Above quota (Can skip ${s.margin} classes)</span>`;

      if (s.risk === "critical") {
        pctClass = "crit";
        riskBadge = `<span class="kpi-badge badge-danger">Critical (&lt;${state.criticalThreshold}%)</span>`;
        recoveryGoal = `<span class="target-calc-text color-danger"><strong>Must attend next ${s.neededForCrit} classes</strong> consecutively to clear ${state.criticalThreshold}%</span>`;
      } else if (s.risk === "warning") {
        pctClass = "warn";
        riskBadge = `<span class="kpi-badge badge-warning">Warning (&lt;${state.warningThreshold}%)</span>`;
        recoveryGoal = `<span class="target-calc-text color-warning">Attend next ${s.neededForWarn} classes to reach ${state.warningThreshold}%</span>`;
      }

      let streakTag = "";
      if (s.streak >= state.chronicDays) {
        streakTag = `<span class="consecutive-streak-badge" title="${s.streak} consecutive classes missed">${s.streak} Days Absent</span>`;
      }

      tr.innerHTML = `
        <td><span class="student-id-code">${s.id}</span></td>
        <td>
          <div class="student-identity-cell">
            <span class="student-name">${s.name}</span>
            ${streakTag}
          </div>
        </td>
        <td>
          <div class="subject-tag">${s.subject}</div>
          <div class="dept-tag">${s.dept}</div>
        </td>
        <td class="text-center">
          <strong>${s.attended}</strong> / ${s.total}
        </td>
        <td class="text-center">
          <div class="pct-badge ${pctClass}">${s.pct}%</div>
        </td>
        <td class="text-center">${riskBadge}</td>
        <td>${recoveryGoal}</td>
        <td class="text-right">
          <div class="actions-cell">
            <button class="btn btn-outline btn-sm btn-view-detail" data-id="${s.id}" title="View Student Recovery Roadmap">
              Roadmap
            </button>
            <button class="btn btn-warning btn-sm btn-quick-alert" data-id="${s.id}" title="Generate Alert Notice">
              Alert
            </button>
          </div>
        </td>
      `;

      tbody.appendChild(tr);
    });

    // Attach row button events
    tbody.querySelectorAll(".btn-view-detail").forEach(btn => {
      btn.addEventListener("click", () => openStudentDetailModal(btn.getAttribute("data-id")));
    });

    tbody.querySelectorAll(".btn-quick-alert").forEach(btn => {
      btn.addEventListener("click", () => {
        const studentId = btn.getAttribute("data-id");
        switchTab("tab-alerts");
        state.alertAudience = "all";
        document.getElementById("alertTargetFilter").value = "all";
        renderAlertsFeed(analyzedList, studentId);
        showToast(`Showing alert for ${studentId}`, "info");
      });
    });
  }

  // ==========================================
  // 5. ALERT COMPOSER & DISPATCH CENTER
  // ==========================================
  function generateAlertContent(student, templateType) {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const shortfall = Math.max(0, Math.round((state.criticalThreshold - student.pct) * 10) / 10);
    const needed = student.neededForCrit;

    if (templateType === "email") {
      return `Subject: OFFICIAL NOTICE: Academic Attendance Shortfall Warning - ${student.name} (${student.id})

Date: ${today}
To: ${student.parentEmail || 'guardian@institution.edu'}
CC: Academic Dean & Department Chair (${student.dept})

Dear Parent/Guardian of ${student.name},

This is an automated formal notification from the Autonomous Academic Attendance Monitoring Agent.

According to our official attendance records, ${student.name} currently holds an aggregate attendance of ${student.pct}% in ${student.subject} (${student.attended} attended out of ${student.total} total sessions).

STATUTORY POLICY NOTICE:
The institutional minimum attendance requirement is strictly ${state.criticalThreshold}%. The student currently faces a deficit of ${shortfall}%, with ${student.streak} recent unexcused absences.

MANDATORY ACTION PLAN:
Under institutional bylaws, students below ${state.criticalThreshold}% will be DEBARRED from appearing in the upcoming End-Semester Examinations. To restore eligibility, ${student.name} must attend the next ${needed} consecutive classes without failure.

Please coordinate with the Academic Counselor immediately.

Sincerely,
Office of Academic Affairs & Attendance Monitoring System
Department of ${student.dept}`;
    }

    if (templateType === "sms") {
      return `URGENT ACADEMIC ALERT: ${student.name} (${student.id}) has ${student.pct}% attendance in ${student.subject} (Min required: ${state.criticalThreshold}%). Current shortfall: ${shortfall}%. Student must attend next ${needed} classes to prevent semester exam debarment. Please call Academic Office: +91 98765 00000.`;
    }

    if (templateType === "counselor") {
      return `[ACADEMIC COUNSELING DOSSIER]
Student: ${student.name} | ID: ${student.id} | Department: ${student.dept}
Subject: ${student.subject} | Status: ${student.risk.toUpperCase()}
Attendance Log: ${student.attended}/${student.total} (${student.pct}%) | Consecutive Absences: ${student.streak}
Shortfall vs Target: -${shortfall}% | Required Recovery Target: ${needed} consecutive class sessions.
Parent Contact: ${student.parentName} (${student.parentPhone} / ${student.parentEmail})
Recommended Intervention: Mandatory Stage-1 Counseling & Attendance Undertaking Form submission.`;
    }

    return "";
  }

  function renderAlertsFeed(analyzedList, targetStudentId = null) {
    const feedContainer = document.getElementById("alertsFeedList");
    if (!feedContainer) return;
    feedContainer.innerHTML = "";

    let recipients = analyzedList;

    if (targetStudentId) {
      recipients = analyzedList.filter(s => s.id === targetStudentId);
    } else {
      if (state.alertAudience === "critical") {
        recipients = analyzedList.filter(s => s.risk === "critical");
      } else if (state.alertAudience === "all-risk") {
        recipients = analyzedList.filter(s => s.risk === "critical" || s.risk === "warning");
      } else if (state.alertAudience === "chronic") {
        recipients = analyzedList.filter(s => s.streak >= state.chronicDays);
      }
    }

    document.getElementById("alertNoticesCount").textContent = recipients.length;

    if (recipients.length === 0) {
      feedContainer.innerHTML = `
        <div style="text-align:center; padding: 3rem; color: var(--text-muted);">
          No students currently fit the chosen alert criteria.
        </div>
      `;
      return;
    }

    recipients.forEach(s => {
      const card = document.createElement("div");
      const urgencyClass = s.risk === "critical" ? "urgency-critical" : "urgency-warning";
      card.className = `alert-card-item ${urgencyClass}`;

      const alertBody = generateAlertContent(s, state.activeTemplate);
      const isDispatched = state.dispatchedAlerts.has(`${s.id}-${state.activeTemplate}`);

      card.innerHTML = `
        <div class="alert-card-top">
          <div class="alert-recipient-info">
            <strong>${s.name} (${s.id})</strong> &bull; <span class="alert-meta-tag">${s.dept} &bull; ${s.pct}%</span>
          </div>
          <span class="channel-badge ${state.activeTemplate === 'email' ? 'channel-email' : state.activeTemplate === 'sms' ? 'channel-sms' : 'channel-counselor'}">
            ${state.activeTemplate.toUpperCase()}
          </span>
        </div>
        <div class="alert-text-preview">${escapeHtml(alertBody)}</div>
        <div class="alert-card-actions">
          <span class="dispatched-status-tag ${isDispatched ? 'dispatched' : ''}" id="statusTag-${s.id}">
            ${isDispatched ? '&#10004; Dispatched via Agent' : '&bull; Pending Dispatch'}
          </span>
          <div style="display:flex; gap: 0.5rem;">
            <button class="btn btn-outline btn-sm btn-copy-single" data-text="${encodeURIComponent(alertBody)}">
              Copy Draft
            </button>
            <button class="btn btn-warning btn-sm btn-dispatch-single" data-id="${s.id}">
              ${isDispatched ? 'Re-Dispatch' : 'Dispatch Alert'}
            </button>
          </div>
        </div>
      `;

      feedContainer.appendChild(card);
    });

    // Copy draft listener
    feedContainer.querySelectorAll(".btn-copy-single").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = decodeURIComponent(btn.getAttribute("data-text"));
        navigator.clipboard.writeText(text).then(() => {
          showToast("Alert notice copied to clipboard!", "success");
        });
      });
    });

    // Dispatch listener
    feedContainer.querySelectorAll(".btn-dispatch-single").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        state.dispatchedAlerts.add(`${id}-${state.activeTemplate}`);
        const tag = document.getElementById(`statusTag-${id}`);
        if (tag) {
          tag.className = "dispatched-status-tag dispatched";
          tag.innerHTML = "&#10004; Dispatched via Agent";
        }
        btn.textContent = "Dispatched";
        btn.disabled = true;
        showToast(`Alert dispatched for Student ${id}!`, "success");
      });
    });
  }

  // ==========================================
  // 6. ANALYTICS & BREAKDOWNS
  // ==========================================
  function renderAnalytics(analyzedList, avgAttendance) {
    const deptContainer = document.getElementById("deptAnalyticsContainer");
    const subContainer = document.getElementById("subjectAnalyticsContainer");
    if (!deptContainer || !subContainer) return;

    deptContainer.innerHTML = "";
    subContainer.innerHTML = "";

    // Department Stats
    const depts = {};
    const subjects = {};

    analyzedList.forEach(s => {
      // Dept grouping
      if (!depts[s.dept]) depts[s.dept] = { totalAttended: 0, totalClasses: 0, count: 0, critical: 0 };
      depts[s.dept].totalAttended += s.attended;
      depts[s.dept].totalClasses += s.total;
      depts[s.dept].count++;
      if (s.risk === "critical") depts[s.dept].critical++;

      // Subject grouping
      if (!subjects[s.subject]) subjects[s.subject] = { totalAttended: 0, totalClasses: 0, count: 0, critical: 0, dept: s.dept };
      subjects[s.subject].totalAttended += s.attended;
      subjects[s.subject].totalClasses += s.total;
      subjects[s.subject].count++;
      if (s.risk === "critical") subjects[s.subject].critical++;
    });

    Object.keys(depts).forEach(deptName => {
      const d = depts[deptName];
      const deptPct = calcPercentage(d.totalAttended, d.totalClasses);

      const div = document.createElement("div");
      div.className = "stat-metric-row";
      div.innerHTML = `
        <div class="stat-label-bar">
          <strong>${deptName} (${d.count} Students)</strong>
          <span>${deptPct}% &bull; <span class="color-danger">${d.critical} Critical</span></span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar" style="width: ${deptPct}%; background: ${deptPct < state.criticalThreshold ? 'var(--danger-color)' : 'var(--accent-primary)'};"></div>
        </div>
      `;
      deptContainer.appendChild(div);
    });

    Object.keys(subjects).forEach(subName => {
      const sub = subjects[subName];
      const subPct = calcPercentage(sub.totalAttended, sub.totalClasses);

      const div = document.createElement("div");
      div.className = "stat-metric-row";
      div.innerHTML = `
        <div class="stat-label-bar">
          <strong>${subName} <small style="color:var(--text-muted);">(${sub.dept})</small></strong>
          <span>${subPct}% &bull; <span class="${sub.critical > 0 ? 'color-danger' : 'color-success'}">${sub.critical} At-Risk</span></span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar" style="width: ${subPct}%; background: ${subPct < state.criticalThreshold ? 'var(--danger-color)' : 'var(--success-color)'};"></div>
        </div>
      `;
      subContainer.appendChild(div);
    });

    // Cohort Distribution Bar
    const total = analyzedList.length;
    const critCount = analyzedList.filter(s => s.risk === "critical").length;
    const warnCount = analyzedList.filter(s => s.risk === "warning").length;
    const safeCount = analyzedList.filter(s => s.risk === "safe").length;

    const critPct = total > 0 ? Math.round((critCount / total) * 100) : 0;
    const warnPct = total > 0 ? Math.round((warnCount / total) * 100) : 0;
    const safePct = total > 0 ? 100 - critPct - warnPct : 0;

    const bCrit = document.getElementById("cohortBarCritical");
    const bWarn = document.getElementById("cohortBarWarning");
    const bSafe = document.getElementById("cohortBarSafe");

    if (bCrit) { bCrit.style.width = `${critPct}%`; bCrit.textContent = `${critPct}% Critical`; }
    if (bWarn) { bWarn.style.width = `${warnPct}%`; bWarn.textContent = `${warnPct}% Warning`; }
    if (bSafe) { bSafe.style.width = `${safePct}%`; bSafe.textContent = `${safePct}% Safe`; }

    document.getElementById("legCrit").textContent = critCount;
    document.getElementById("legWarn").textContent = warnCount;
    document.getElementById("legSafe").textContent = safeCount;
  }

  // ==========================================
  // 7. EXECUTIVE REPORT GENERATOR
  // ==========================================
  function renderExecutiveReport(analyzedList, avgAttendance, criticalCount, totalStudents) {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("reportGenDate").textContent = today;

    document.getElementById("repStatTotal").textContent = totalStudents;
    document.getElementById("repStatMean").textContent = `${avgAttendance}%`;
    document.getElementById("repStatDebarred").textContent = criticalCount;
    
    const complianceRate = totalStudents > 0 ? Math.round(((totalStudents - criticalCount) / totalStudents) * 1000) / 10 : 0;
    document.getElementById("repStatCompliance").textContent = `${complianceRate}%`;

    document.getElementById("reportNarrativeText").innerHTML = `
      The autonomous attendance evaluation engine conducted a compliance audit across <strong>${totalStudents} enrolled students</strong>. 
      <strong>${criticalCount} candidates (${Math.round((criticalCount / (totalStudents || 1)) * 100)}%)</strong> are currently in violation of the statutory 
      ${state.criticalThreshold}% requirement and face examination debarment. 
      An aggregate institutional mean of <strong>${avgAttendance}%</strong> was recorded. 
      Immediate intervention via automated warning letters and guardian conferences is underway.
    `;

    const reportTableBody = document.getElementById("reportAtRiskTableBody");
    if (!reportTableBody) return;
    reportTableBody.innerHTML = "";

    const atRisk = analyzedList.filter(s => s.risk === "critical");
    if (atRisk.length === 0) {
      reportTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; color: var(--success-color); padding: 1.5rem;">
            &check; Excellent! No students are currently under the ${state.criticalThreshold}% critical risk threshold.
          </td>
        </tr>
      `;
      return;
    }

    atRisk.forEach(s => {
      const shortfall = Math.max(0, Math.round((state.criticalThreshold - s.pct) * 10) / 10);
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${s.id}</strong></td>
        <td>${s.name}</td>
        <td>${s.dept} (${s.subject})</td>
        <td>${s.attended} / ${s.total}</td>
        <td><strong class="color-danger">${s.pct}%</strong></td>
        <td>-${shortfall}%</td>
        <td><strong>Attend next ${s.neededForCrit} classes</strong></td>
      `;
      reportTableBody.appendChild(tr);
    });
  }

  // ==========================================
  // 8. STUDENT DRILL-DOWN & RECOVERY SIMULATOR
  // ==========================================
  function openStudentDetailModal(studentId) {
    state.activeDetailStudentId = studentId;
    state.tempSimOffset = { attended: 0, total: 0, streak: 0 };
    updateStudentDetailModalView();
    document.getElementById("modalStudentDetail").style.display = "flex";
  }

  function updateStudentDetailModalView() {
    const s = state.students.find(item => item.id === state.activeDetailStudentId);
    if (!s) return;

    const effAttended = s.attended + state.tempSimOffset.attended;
    const effTotal = s.total + state.tempSimOffset.total;
    const effStreak = Math.max(0, s.streak + state.tempSimOffset.streak);
    const effPct = calcPercentage(effAttended, effTotal);
    const effRisk = getRiskLevel(effPct, effStreak);

    document.getElementById("detailStudentName").textContent = s.name;
    document.getElementById("detailStudentId").textContent = s.id;
    document.getElementById("detailDept").textContent = s.dept;
    document.getElementById("detailSubject").textContent = s.subject;
    document.getElementById("detailRatio").textContent = `${effAttended} / ${effTotal} Classes`;
    
    const pctEl = document.getElementById("detailPct");
    pctEl.textContent = `${effPct}%`;
    pctEl.className = effRisk === 'critical' ? 'color-danger' : effRisk === 'warning' ? 'color-warning' : 'color-success';

    const riskBadge = document.getElementById("detailRiskBadge");
    riskBadge.textContent = effRisk.toUpperCase();
    riskBadge.className = effRisk === 'critical' ? 'badge-danger' : effRisk === 'warning' ? 'badge-warning' : 'badge-success';

    const neededCrit = calcClassesNeeded(effAttended, effTotal, state.criticalThreshold);
    const neededWarn = calcClassesNeeded(effAttended, effTotal, state.warningThreshold);
    const margin = calcSafetyMargin(effAttended, effTotal, state.criticalThreshold);

    let planHtml = "";
    if (effRisk === "critical") {
      planHtml = `
        <p><strong>Status: Debarment Risk Notice.</strong></p>
        <p>Student is currently <strong>${Math.round((state.criticalThreshold - effPct) * 10) / 10}% below</strong> the mandatory ${state.criticalThreshold}% bar.</p>
        <p style="margin-top:0.4rem; padding: 0.5rem; background: var(--danger-bg); border-radius: 4px; border: 1px solid var(--danger-border);">
          <strong>Mandatory Recovery Requirement:</strong> The student must attend the next <strong>${neededCrit} consecutive classes</strong> without missing a single lecture to achieve ${state.criticalThreshold}%.
        </p>
      `;
    } else if (effRisk === "warning") {
      planHtml = `
        <p><strong>Status: Early Intervention Warning.</strong></p>
        <p>Student is borderline. Required classes to safely reach ${state.warningThreshold}%: <strong>${neededWarn} classes</strong>.</p>
        <p>Current margin before dropping below ${state.criticalThreshold}%: <strong>${margin} allowable absences</strong>.</p>
      `;
    } else {
      planHtml = `
        <p><strong>Status: Compliant & In Good Standing.</strong></p>
        <p>Student maintains a strong attendance record. They can miss up to <strong>${margin} upcoming classes</strong> before their percentage falls under ${state.criticalThreshold}%.</p>
      `;
    }

    document.getElementById("recoveryPlanText").innerHTML = planHtml;

    document.getElementById("detailParentName").textContent = s.parentName || "Not Provided";
    document.getElementById("detailParentEmail").textContent = s.parentEmail || "Not Provided";
    document.getElementById("detailParentPhone").textContent = s.parentPhone || "Not Provided";
  }

  // ==========================================
  // 9. CSV PARSER & EXPORTER UTILITIES
  // ==========================================
  function parseCsvText(csvText) {
    const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length < 2) throw new Error("CSV file must contain a header and at least one student row.");

    const header = lines[0].split(",").map(h => h.trim().toLowerCase().replace(/[\s_-]+/g, ""));
    const idIdx = header.findIndex(h => h.includes("id") || h.includes("roll"));
    const nameIdx = header.findIndex(h => h.includes("name"));
    const deptIdx = header.findIndex(h => h.includes("dept") || h.includes("department"));
    const subIdx = header.findIndex(h => h.includes("sub") || h.includes("subject") || h.includes("course"));
    const totIdx = header.findIndex(h => h.includes("total") || h.includes("held"));
    const attIdx = header.findIndex(h => h.includes("att") || h.includes("present"));
    const streakIdx = header.findIndex(h => h.includes("absent") || h.includes("streak") || h.includes("consecutive"));
    const pNameIdx = header.findIndex(h => h.includes("parentname") || h.includes("guardian"));
    const pEmailIdx = header.findIndex(h => h.includes("email"));
    const pPhoneIdx = header.findIndex(h => h.includes("phone") || h.includes("mobile"));

    if (idIdx === -1 || nameIdx === -1 || totIdx === -1 || attIdx === -1) {
      throw new Error("Missing required columns. Header must include Student ID, Name, Total Classes, and Classes Attended.");
    }

    const parsed = [];
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(",").map(p => p.trim());
      if (parts.length < 4) continue;

      const total = parseInt(parts[totIdx], 10) || 1;
      const attended = Math.min(total, parseInt(parts[attIdx], 10) || 0);

      parsed.push({
        id: parts[idIdx] || `STU${100 + i}`,
        name: parts[nameIdx] || `Student ${i}`,
        dept: deptIdx !== -1 && parts[deptIdx] ? parts[deptIdx] : "Computer Science",
        subject: subIdx !== -1 && parts[subIdx] ? parts[subIdx] : "Core Engineering",
        total: total,
        attended: attended,
        streak: streakIdx !== -1 ? parseInt(parts[streakIdx], 10) || 0 : 0,
        parentName: pNameIdx !== -1 ? parts[pNameIdx] : "",
        parentEmail: pEmailIdx !== -1 ? parts[pEmailIdx] : "",
        parentPhone: pPhoneIdx !== -1 ? parts[pPhoneIdx] : ""
      });
    }

    return parsed;
  }

  function downloadCsvFile(filename, csvContent) {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function downloadTextFile(filename, textContent) {
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function switchTab(tabId) {
    state.activeTab = tabId;
    document.querySelectorAll(".tab-btn").forEach(btn => {
      const isTarget = btn.getAttribute("data-tab") === tabId;
      btn.classList.toggle("active", isTarget);
      btn.setAttribute("aria-selected", isTarget);
    });

    document.querySelectorAll(".tab-content-panel").forEach(panel => {
      panel.classList.toggle("active", panel.id === tabId);
    });
  }

  // ==========================================
  // 10. EVENT LISTENERS INITIALIZATION
  // ==========================================
  function initEventListeners() {
    // Tab switching
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab");
        switchTab(tabId);
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById("btnThemeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        document.body.setAttribute("data-theme", state.theme);
        localStorage.setItem("att_theme", state.theme);
        showToast(`Switched to ${state.theme} mode`, "info");
      });
    }

    // Run Agent Analysis Button
    const runBtn = document.getElementById("btnRunAgent");
    if (runBtn) {
      runBtn.addEventListener("click", () => {
        runBtn.classList.add("pulse");
        runAgentAnalysis();
        setTimeout(() => runBtn.classList.remove("pulse"), 600);
        showToast("Attendance analysis completed successfully!", "success");
      });
    }

    // Insight Banner Actions
    document.getElementById("btnQuickAlerts").addEventListener("click", () => {
      switchTab("tab-alerts");
    });
    document.getElementById("btnQuickExport").addEventListener("click", () => {
      switchTab("tab-reports");
      document.getElementById("btnPrintReport").focus();
    });

    // Table Search
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("btnClearSearch");
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim();
      clearSearch.style.display = state.searchQuery ? "block" : "none";
      runAgentAnalysis();
    });
    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearSearch.style.display = "none";
      runAgentAnalysis();
    });

    // Filter Pills
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        state.activeFilter = pill.getAttribute("data-filter");
        runAgentAnalysis();
      });
    });

    // Department Filter Select
    document.getElementById("filterDeptSelect").addEventListener("change", (e) => {
      state.selectedDept = e.target.value;
      runAgentAnalysis();
    });

    // Table Header Sort
    document.querySelectorAll(".th-sortable").forEach(th => {
      th.addEventListener("click", () => {
        const field = th.getAttribute("data-sort");
        if (state.sortField === field) {
          state.sortAsc = !state.sortAsc;
        } else {
          state.sortField = field;
          state.sortAsc = true;
        }
        runAgentAnalysis();
      });
    });

    // Bulk Alert Trigger on Table
    document.getElementById("btnBulkAlert").addEventListener("click", () => {
      switchTab("tab-alerts");
      state.alertAudience = "critical";
      document.getElementById("alertTargetFilter").value = "critical";
      runAgentAnalysis();
    });

    // Export Filtered Table CSV
    document.getElementById("btnExportFilteredCsv").addEventListener("click", () => {
      let csv = "Student_ID,Name,Department,Subject,Total_Classes,Classes_Attended,Percentage,Risk_Status\n";
      state.students.forEach(s => {
        const pct = calcPercentage(s.attended, s.total);
        const risk = getRiskLevel(pct, s.streak);
        csv += `"${s.id}","${s.name}","${s.dept}","${s.subject}",${s.total},${s.attended},${pct}%,"${risk}"\n`;
      });
      downloadCsvFile(`Attendance_Roster_${Date.now()}.csv`, csv);
      showToast("Filtered student roster exported as CSV!", "success");
    });

    // Alert Template Radio Items
    document.querySelectorAll(".template-radio-item").forEach(item => {
      item.addEventListener("click", () => {
        document.querySelectorAll(".template-radio-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        const radio = item.querySelector("input[type=radio]");
        radio.checked = true;
        state.activeTemplate = radio.value;
        runAgentAnalysis();
      });
    });

    // Alert Target Filter Change
    document.getElementById("alertTargetFilter").addEventListener("change", (e) => {
      state.alertAudience = e.target.value;
      runAgentAnalysis();
    });

    // Copy All Visible Alerts
    document.getElementById("btnCopyActiveAlerts").addEventListener("click", () => {
      const cards = document.querySelectorAll("#alertsFeedList .alert-text-preview");
      if (cards.length === 0) {
        showToast("No alerts available to copy.", "info");
        return;
      }
      let allText = Array.from(cards).map(c => c.textContent).join("\n\n" + "=".repeat(60) + "\n\n");
      navigator.clipboard.writeText(allText).then(() => {
        showToast(`Copied ${cards.length} alert notices to clipboard!`, "success");
      });
    });

    // Simulate Batch Dispatch
    document.getElementById("btnDispatchAllAlerts").addEventListener("click", () => {
      let count = 0;
      state.students.forEach(s => {
        const key = `${s.id}-${state.activeTemplate}`;
        if (!state.dispatchedAlerts.has(key)) {
          state.dispatchedAlerts.add(key);
          count++;
        }
      });
      runAgentAnalysis();
      showToast(`Agent dispatched notices to ${count} recipient channels!`, "success");
    });

    // Download All Alerts (.txt)
    document.getElementById("btnDownloadAllAlertsTxt").addEventListener("click", () => {
      let doc = `ACADEMIC ATTENDANCE MONITORING AGENT - ALERT DOSSIER\nGenerated: ${new Date().toLocaleString()}\nScope: ${state.alertAudience}\nTemplate: ${state.activeTemplate.toUpperCase()}\n\n`;
      state.students.forEach(s => {
        const text = generateAlertContent(s, state.activeTemplate);
        doc += text + "\n\n" + "-".repeat(70) + "\n\n";
      });
      downloadTextFile(`Attendance_Alerts_${state.activeTemplate}_${Date.now()}.txt`, doc);
      showToast("Alert dossier downloaded as text file!", "success");
    });

    // Reports Action Buttons
    document.getElementById("btnPrintReport").addEventListener("click", () => {
      window.print();
    });

    document.getElementById("btnExportReportCsv").addEventListener("click", () => {
      let csv = "Student_ID,Name,Department,Subject,Total_Classes,Classes_Attended,Percentage,Risk_Status,Required_For_75\n";
      state.students.forEach(s => {
        const pct = calcPercentage(s.attended, s.total);
        const risk = getRiskLevel(pct, s.streak);
        const needed = calcClassesNeeded(s.attended, s.total, state.criticalThreshold);
        csv += `"${s.id}","${s.name}","${s.dept}","${s.subject}",${s.total},${s.attended},${pct}%,"${risk}",${needed}\n`;
      });
      downloadCsvFile(`Attendance_Executive_Audit_${Date.now()}.csv`, csv);
      showToast("Executive Audit Report exported as CSV!", "success");
    });

    document.getElementById("btnExportReportJson").addEventListener("click", () => {
      const data = {
        metadata: {
          generatedAt: new Date().toISOString(),
          system: "Attendance Monitoring Agent",
          thresholds: { critical: state.criticalThreshold, warning: state.warningThreshold }
        },
        students: state.students.map(s => {
          const pct = calcPercentage(s.attended, s.total);
          return { ...s, percentage: pct, risk: getRiskLevel(pct, s.streak) };
        })
      };
      downloadTextFile(`attendance_dataset_${Date.now()}.json`, JSON.stringify(data, null, 2));
      showToast("Dataset exported as JSON file!", "success");
    });

    document.getElementById("btnExportAllReports").addEventListener("click", () => {
      switchTab("tab-reports");
      document.getElementById("btnExportReportCsv").click();
    });

    // CSV Upload Modal Interactions
    const modalCsv = document.getElementById("modalCsvUpload");
    document.getElementById("btnUploadCsvModal").addEventListener("click", () => {
      modalCsv.style.display = "flex";
    });
    document.getElementById("btnCloseCsvModal").addEventListener("click", () => {
      modalCsv.style.display = "none";
    });

    const dropZone = document.getElementById("dropZone");
    const fileInput = document.getElementById("csvFileInput");
    const processBtn = document.getElementById("btnProcessCsvFile");
    let loadedCsvString = "";

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("dragover");
    });
    dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("dragover");
    });
    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });
    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFileSelect(e.target.files[0]);
      }
    });

    function handleFileSelect(file) {
      document.getElementById("selectedFileName").textContent = `Selected: ${file.name} (${Math.round(file.size / 1024)} KB)`;
      const reader = new FileReader();
      reader.onload = (e) => {
        loadedCsvString = e.target.result;
        processBtn.disabled = false;
      };
      reader.readAsText(file);
    }

    processBtn.addEventListener("click", () => {
      try {
        const parsed = parseCsvText(loadedCsvString);
        state.students = parsed;
        modalCsv.style.display = "none";
        runAgentAnalysis();
        showToast(`Successfully imported ${parsed.length} student records from CSV!`, "success");
      } catch (err) {
        showToast(`CSV Parse Error: ${err.message}`, "danger");
      }
    });

    document.getElementById("btnDownloadTemplateCsv").addEventListener("click", () => {
      let csv = "Student_ID,Name,Department,Subject,Total_Classes,Classes_Attended,Consecutive_Absences,Parent_Name,Parent_Email,Parent_Phone\n";
      state.students.slice(0, 5).forEach(s => {
        csv += `${s.id},${s.name},${s.dept},${s.subject},${s.total},${s.attended},${s.streak},${s.parentName},${s.parentEmail},${s.parentPhone}\n`;
      });
      downloadCsvFile("sample_attendance.csv", csv);
      showToast("Downloaded sample attendance CSV template", "info");
    });

    // Add Student Modal
    const modalAdd = document.getElementById("modalAddStudent");
    document.getElementById("btnAddStudentModal").addEventListener("click", () => {
      modalAdd.style.display = "flex";
    });
    document.getElementById("btnCloseAddStudentModal").addEventListener("click", () => {
      modalAdd.style.display = "none";
    });
    document.getElementById("btnCancelAddStudent").addEventListener("click", () => {
      modalAdd.style.display = "none";
    });

    document.getElementById("btnSaveNewStudent").addEventListener("click", (e) => {
      e.preventDefault();
      const id = document.getElementById("newStuId").value.trim();
      const name = document.getElementById("newStuName").value.trim();
      const dept = document.getElementById("newStuDept").value;
      const subject = document.getElementById("newStuSubject").value.trim();
      const total = parseInt(document.getElementById("newStuTotal").value, 10);
      const attended = parseInt(document.getElementById("newStuAttended").value, 10);
      const streak = parseInt(document.getElementById("newStuConsecutive").value, 10) || 0;
      const parentName = document.getElementById("newStuParentName").value.trim();
      const parentEmail = document.getElementById("newStuParentEmail").value.trim();
      const parentPhone = document.getElementById("newStuParentPhone").value.trim();

      if (!id || !name || !subject || isNaN(total) || isNaN(attended)) {
        showToast("Please fill in all required fields marked with *", "danger");
        return;
      }
      if (attended > total) {
        showToast("Classes Attended cannot exceed Total Classes!", "danger");
        return;
      }

      state.students.unshift({
        id, name, dept, subject, total, attended, streak, parentName, parentEmail, parentPhone
      });

      document.getElementById("addStudentForm").reset();
      modalAdd.style.display = "none";
      runAgentAnalysis();
      showToast(`Student ${name} (${id}) added and analyzed!`, "success");
    });

    // Thresholds / Settings Modal
    const modalConfig = document.getElementById("modalConfig");
    document.getElementById("btnConfigure").addEventListener("click", () => {
      modalConfig.style.display = "flex";
    });
    document.getElementById("btnCloseConfigModal").addEventListener("click", () => {
      modalConfig.style.display = "none";
    });

    const critSlider = document.getElementById("criticalThresholdSlider");
    const warnSlider = document.getElementById("warningThresholdSlider");
    const critDisplay = document.getElementById("criticalValDisplay");
    const warnDisplay = document.getElementById("warningValDisplay");
    const chronicInput = document.getElementById("chronicDaysInput");

    critSlider.addEventListener("input", (e) => {
      critDisplay.textContent = `${e.target.value}%`;
    });
    warnSlider.addEventListener("input", (e) => {
      warnDisplay.textContent = `${e.target.value}%`;
    });

    document.getElementById("btnResetDefaultThresholds").addEventListener("click", () => {
      critSlider.value = 75;
      warnSlider.value = 80;
      chronicInput.value = 3;
      critDisplay.textContent = "75%";
      warnDisplay.textContent = "80%";
    });

    document.getElementById("btnSaveConfig").addEventListener("click", () => {
      state.criticalThreshold = parseInt(critSlider.value, 10);
      state.warningThreshold = parseInt(warnSlider.value, 10);
      state.chronicDays = parseInt(chronicInput.value, 10) || 3;
      document.getElementById("activeThresholdDisplay").textContent = `Critical < ${state.criticalThreshold}%`;
      modalConfig.style.display = "none";
      runAgentAnalysis();
      showToast(`Agent policies updated: Critical < ${state.criticalThreshold}%, Warning < ${state.warningThreshold}%`, "success");
    });

    // Student Detail Modal Simulator
    document.getElementById("btnCloseStudentDetail").addEventListener("click", () => {
      document.getElementById("modalStudentDetail").style.display = "none";
    });
    document.getElementById("btnCloseDetailFooter").addEventListener("click", () => {
      document.getElementById("modalStudentDetail").style.display = "none";
    });

    document.getElementById("btnSimulateAttend").addEventListener("click", () => {
      state.tempSimOffset.attended += 1;
      state.tempSimOffset.total += 1;
      state.tempSimOffset.streak = -999; // Attended resets streak
      updateStudentDetailModalView();
      showToast("Simulated: Student attended next class (+1)", "success");
    });

    document.getElementById("btnSimulateAbsent").addEventListener("click", () => {
      state.tempSimOffset.total += 1;
      state.tempSimOffset.streak = (state.tempSimOffset.streak <= -900 ? 0 : state.tempSimOffset.streak) + 1;
      updateStudentDetailModalView();
      showToast("Simulated: Student missed next class (+1 unexcused absence)", "danger");
    });

    document.getElementById("btnResetStudentSim").addEventListener("click", () => {
      state.tempSimOffset = { attended: 0, total: 0, streak: 0 };
      updateStudentDetailModalView();
      showToast("Simulator reset to baseline record", "info");
    });

    document.getElementById("btnTriggerStudentAlert").addEventListener("click", () => {
      const studentId = state.activeDetailStudentId;
      document.getElementById("modalStudentDetail").style.display = "none";
      switchTab("tab-alerts");
      renderAlertsFeed(state.students, studentId);
      showToast(`Opened Alert Composer for ${studentId}`, "info");
    });

    // Footer Reset Demo
    document.getElementById("btnFooterResetDemo").addEventListener("click", () => {
      state.students = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
      runAgentAnalysis();
      showToast("Default demonstration dataset reloaded!", "info");
    });
    document.getElementById("btnFooterDownloadCsv").addEventListener("click", () => {
      document.getElementById("btnDownloadTemplateCsv").click();
    });
  }

  // ==========================================
  // 11. INITIALIZATION
  // ==========================================
  function init() {
    // Check saved theme
    const savedTheme = localStorage.getItem("att_theme") || "dark";
    state.theme = savedTheme;
    document.body.setAttribute("data-theme", savedTheme);

    // Load Default Data
    state.students = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));

    // Wire up events
    initEventListeners();

    // Execute Initial Agent Analysis
    runAgentAnalysis();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
