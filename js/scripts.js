$(document).ready(function() {
  $("#tracks").submit(function(event) {
    event.preventDefault();
    var userName = $("input#userName").val();
    var workplaceInput = $("input:radio[name=workplace-type]:checked").val();
    var sandwichInput = $("input:radio[name=sandwich-type]:checked").val();
    var freetimeInput = $("input:radio[name=freetime-type]:checked").val();
    var salaryInput =
    $("input:radio[name=salary-type]:checked").val();
    var interestInput =
    $("input:radio[name=interest-type]:checked").val();

    var csharp = 0;
    var ruby= 0;
    var design = 0;
// workplace
    if (workplaceInput === "Corporation") {
      csharp += 1;
    } else if (workplaceInput === 'Start-up') {
      ruby+= 1;
    } else if (workplaceInput === 'CreativeAgency') {
      design+= 1;
    }
// sandwich
    if (sandwichInput === "toast") {
      csharp += 1;
    } else if (sandwichInput === 'artisan') {
      ruby += 1;
    } else if (sandwichInput === 'home') {
      design += 1;
    }
// freetime
    if (freetimeInput === "netflix") {
      csharp += 1;
    } else if (freetimeInput === 'adventure') {
      ruby += 1;
    } else if (freetimeInput === 'art') {
      design += 1;
    }

// salary
    if (salaryInput === "midrange") {
      csharp += 1;
    } else if (salaryInput === 'highrange') {
      ruby += 1;
    } else if (salaryInput === 'lowrange') {
      design += 1;
    }
// Interest
    if (interestInput === "employment") {
      csharp += 1;
    } else if (interestInput === "income") {
      ruby += 1;
    } else if (interestInput === "onlineart") {
      design += 1;
    }

// Results
    $(".suggestedtrack").show();
    $(".apply").show();
    $("#name").text(userName)
    if (csharp > ruby+design) {
      $(".result").hide();
      $("#csharp").show()
    } else if (ruby> csharp+design) {
      $(".result").hide();
      $("#ruby").show();
    } else if (design > csharp+ruby) {
      $(".result").hide();
      $("#design").show();
    }
    $(".apply").show();
// apply button
  });

});
