
  
        var school = "atlanta";
       


        var queryURL = `https://api.data.gov/ed/collegescorecard/v1/schools/nearest.json?api_key=HNg7UV31G0EyV08Fh2zkZBi1WNM1XffC3ttbfbw5&school.city=${school}&_per_page=100`;



    var filteredSchools = [];
    function getResults() {
    //From Jack: get all the form input from our quiz
    var subjectMath = ("#math").val();
    var subjectScience = ("#science").val();
    var subjectSStudies = ("#sStudies").val();
    var subjectLiberalArts = ("#lArts").val();
    var mensSchool = $("#allMaleBtn").val(); //From Jack: the jquery won't look exactly like this but this should evaluate to T/F
    var femaleSchool = $("#allFemaleBtn").val();
    var coedSchool = $("#coEdBtn").val();
    var religiousYes = $("#q3YesBtn").val();
    var religiousNo = $("#q3NoBtnBtn").val();
    var aveAgeYes = $("#q4YesBtn").val();
    var aveAgeNo = $("#q4NoBtnBtn").val();
    var retentionRatesYes = $("#q5YesBtn").val();
    var retentionRatesNo = $("#q5NoBtnBtn").val();
    var averageCostYes = $("#q6YesBtn").val();
    var averageCostNo = $("#q6NoBtnBtn").val();
    //need to work on question 7 buttons/id's
    var aidYes = $("#q8YesBtn").val();
    var aidNo = $("#q8NoBtnBtn").val();


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
            if (schoolObject.school.women_only !== 0 ) {
              schoolIsValid = false;
            }
          }

          if (femaleSchool === true ) {
            if (schoolObject.school.men_only !== 0 ) {
              schoolIsValid = false;
            }
          }


          if (religiousYes === true ) {
              //[2].school.religious_affiliation
            if (schoolObject.school.religious_affiliation === 0  ) {
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

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //need correct name to be pulled from data dictionary
          if (aidYes === true ) {
              //[1][2017].aid.federal_loan_rate
            if (schooli.aid.federal_loan_rate < 0.5 ) {
              schoolIsValid = false;
            }
          }



          //after we've done all of our filtering...
        if (schoolIsValid) {
            console.log("this is valid:: "+schoolObject.school.name);
            // console.log("this is valid:: "+response.results[i].school.name);
            filteredSchools.push(schoolObject);
            console.log(filteredSchools);
          }

        })

        //once we have filtered schoools...
        for (var i = 0; i < filteredSchools.length; i++) {
          //create a "repeating element" for each filtered school with jquery
          var a = $("<div>");
          a.addClass("card");
          var Schoolname = filteredSchools[i].school.name;
          a.attr("data-name", Schoolname);
          a.text(Schoolname);
          var b = $("<div>");
          b.addClass("card-body");
          var c = $("<h5>");
          c.addClass("card-title");
          c.text(Schoolname);
          var d = $("<p>");
          d.addClass("card-text");
          var SchoolCSZ = filteredSchools[i].school.city+", "+filteredSchools[i].school.state+" "+filteredSchools[i].school.zip;
          var SchoolDebtAvg = filteredSchools[i].latest.aid.cumulative_debt["90th_percentile"];
          var SchoolEarningMed = filteredSchools[i].latest.earnings["10_yrs_after_entry"].median
          d.append(SchoolCSZ);
          d.append("avg sudent debt: $"+SchoolDebtAvg);
          d.append("med sudent earning in 10yrs: $"+SchoolEarningMed);
          //[7].school.name
          //    var school
          console.log(filteredSchools[i].school.name);
          //    console.log(filteredSchools[i].school.city);
          //    console.log(filteredSchools[i].school.state);
          // console.log(SchoolCSZ);
          //    var N = toString(90th_percentile);
          //    var Percentile =[""90th_percentile""]
      
        //   console.log(SchoolDebtAvg);
          b.append(d);
          b.prepend(c);
          a.append(b);
          $("#results").append(a)
        }
        
    });

    
    };

    $(document).on("click", "#start", cscard);



    };