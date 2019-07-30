
function cscard(event) {
    
      event.preventDefault(); //Prevents page from reloading before submit buttin is clicked...
      
      //Initializes variables for executing this function:        
      let cityIn = schoolCity;; //Declared, but value never read!!!
      let queryURL = `https://api.data.gov/ed/collegescorecard/v1/schools/nearest.json?api_key=HNg7UV31G0EyV08Fh2zkZBi1WNM1XffC3ttbfbw5&school.city=${cityIn}&_per_page=100`;
               
      let filteredSchools = []; //The results will be pushed into this empty array, upon submit

      // Initializes all variables
      let subjectMath = false;
      let subjectScience = false;
      let subjectSStudies = false;
      let subjectLiberalArts = false;
      let mensSchool = false;
      let femaleSchool = false;
      let religiousYes = false;
      let retentionRatesYes = false;
      let avgerageTuitionYes = false;
      let averageCostYes1 = false;
      let averageCostYes2 = false;
      let averageCostYes3 = false;
      let aidYes = false;

      //Gets input from quiz using IDs:
      if ($('#mathBtn').is(":checked")){  //Checks if math is selected
        subjectMath = true;
        console.log("math:: "+subjectMath);
      }
      if ($('#scienceBtn').is(":checked")){ //Checks if science is selected
        subjectScience = true;
        console.log("science:: "+subjectScience);
      }
      if ($('#sStudiesBtn').is(":checked")){ //Checks if social studies is selected
        subjectSStudies = true;
        console.log("socislsudies:: "+subjectSStudies);
      }
      if ($('#lArtsBtn').is(":checked")){  //Checks if liberal arts is selected
        subjectLiberalArts = true;
        console.log("liberalArt:: "+subjectLiberalArts);
      }
      if ($('#allMaleBtn').is(":checked")){ //Checks if all mens college is selected
      mensSchool = true; //Should evaluate to T/F
      console.log("mens:: "+mensSchool);
      } 
      if ($('#allFemaleBtn').is(":checked")){ //Checks if all female college is selected
      //Var femaleSchool = $("#allFemaleBtn").val();
      femaleSchool = true;
      console.log("Femms:: "+femaleSchool);
      }
    
    if ($('#q3YesBtn').is(":checked")){ //Checks if all schools with religious affiliation is selected
      religiousYes = true;
      console.log("rel:: "+religiousYes);
      }
    if ($('#q5YesBtn').is(":checked")){ //Checks if retention rates is important
      retentionRatesYes = true;
      console.log("ret:: "+retentionRatesYes);
      }
    if ($('#q6YesBtn').is(":checked")){ //Checks if average tuition is important
      avgerageTuitionYes = true;
      console.log("tui:: "+avgerageTuitionYes);
    }
    if ($('#q7YesBtn1').is(":checked")){ //Checks if average cost one... is MOST important
      averageCostYes1 = true;
      console.log("avgC:: "+averageCostYes1);
    }
    if ($('#q7YesBtn2').is(":checked")){  //Checks if average cost two... is MOST important
      averageCostYes2 = true;
      console.log("avgC:: "+averageCostYes2);
    }
    if ($('#q7YesBtn3').is(":checked")){  //Checks if average cost three... is MOST important
      averageCostYes3 = true;
      console.log("avgC:: "+averageCostYes3);
    }
    if ($('#q8YesBtn').is(":checked")){  //Checks if info about financial aid is selected
      aidYes = true;
      console.log("aid:: "+aidYes);
    }
    
    //Calles the College Score card API
    $.ajax({
    url: queryURL,
    method: "GET",
    meta: {
      page: 1
    }
    }).then((response)=>{
      console.log(response);
      response.results.forEach(function(schoolObject) {
      //   console.log(schoolObject);
        var schooli = schoolObject["2017"];
        //console.log(schoolObject);
        var schoolIsValid = true;
        
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //need correct name to be pulled from data dictionary
        if (subjectMath === true ) {
          //   [""0""][2017].academics.program.bachelors.mathematics
          if (schooli.academics.program.bachelors.mathematics === 0 ) {
            schoolIsValid = false;
          }
        }
    // //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // //need correct name to be pulled from data dictionary
        if (subjectScience === true ) {
            // [""0""][2017].academics.program.bachelors.physical_science
          if (schooli.academics.program.bachelors.physical_science === 0 ) {
            schoolIsValid = false;
          }
        }
    // //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // //need correct name to be pulled from data dictionary
        if (subjectSStudies === true ) {
            //[""0""][2017].academics.program.bachelors.social_science
          if (schooli.academics.program.bachelors.social_science === 0 ) {
            schoolIsValid = false;
          }
        }
    // //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // //need correct name to be pulled from data dictionary
        if (subjectLiberalArts === true ) {
            //[""0""][2017].academics.program.bachelors.philosophy_religious
          if (schooli.academics.program.bachelors.philosophy_religious === 0 ) {
            schoolIsValid = false;
          }
        }
            if (mensSchool === true ) {
            //[""0""].school.men_only
          if (schoolObject.school.women_only === 1 ) {
            schoolIsValid = false;
          }
        }  
        if (femaleSchool === true ) {
          if (schoolObject.school.men_only === 1 ) {
            schoolIsValid = false;
          }
        }
        if (religiousYes === true ) {
            //[2].school.religious_affiliation
          if (schoolObject.school.religious_affiliation === null  ) {
            schoolIsValid = false;
          }
        }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // //need correct name to be pulled from data dictionary
        if (retentionRatesYes === true ) {
            //[2][2017].student.retention_rate.four_year.full_time
          if (schooli.student.retention_rate.four_year.full_time < 0.51 ) {
            schoolIsValid = false;
          }
        }
    // //not sure if this one is correct
        if (averageCostYes1 === true ) {
          //[2][2017].cost.attendance.academic_year
          if (schooli.cost.attendance.academic_year > 10000 ) {
            schoolIsValid = false;
          }
        }
        if (averageCostYes2 === true ) {
          //[2][2017].cost.attendance.academic_year
          if (schooli.cost.attendance.academic_year > 30000 ) {
            schoolIsValid = false;
          }
        }
        if (averageCostYes3 === true ) {
          //[2][2017].cost.attendance.academic_year
          if (schooli.cost.attendance.academic_year < 30000 ) {
            schoolIsValid = false;
          }
        }
    // //need correct name to be pulled from data dictionary
        if (aidYes === true ) {
            //[1][2017].aid.federal_loan_rate
          if (schooli.aid.federal_loan_rate < 0.5 ) {
            schoolIsValid = false;
          }
        }
    // //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //after we've done all of our filtering...
      if (schoolIsValid) {
          console.log("this is valid:: "+schoolObject.school.name);
          // console.log("this is valid:: "+response.results[i].school.name);
          filteredSchools.push(schoolObject);
          // console.log(filteredSchools);
        }
      });
      //once we have filtered schoools...
      for (var i = 0; i < filteredSchools.length; i++) {
        //create a "repeating element" for each filtered school with jquery
        var Schoolname = filteredSchools[i].school.name;
        var SchoolCSZ = filteredSchools[i].school.city+", "+filteredSchools[i].school.state+" "+filteredSchools[i].school.zip;
        var SchoolDebtAvg = filteredSchools[i].latest.aid.cumulative_debt["90th_percentile"];
        var SchoolEarningMed = filteredSchools[i].latest.earnings["10_yrs_after_entry"].median;

        console.log(filteredSchools[i].school.name);

        console.log(filteredSchools[i].school.religious_affiliation);
    
        $("#allQuestions").replaceWith(`<div id="results"> 
                                          <div class="card" data-name ="${Schoolname}">
                                          <div id="cardBody" class="card-body">
                                          <div id="title" class="card-title"> ${Schoolname}</div>
                                          <div id="text" class="card-text"> Location: ${SchoolCSZ}<br>
                                          Average student debt: $${SchoolDebtAvg}
                                          <br> 
                                          Median student earning in 10yrs: $${SchoolEarningMed}</div> 
                                          </div>
                                          <div id="redo"> Refresh the page to redo the quiz.</div>
                                          </div>`);
      }
    });
};

$("#submitBtn").on("click", function(event){
  cscard(event);
  $("#submit").hide();
});


