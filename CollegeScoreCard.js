
  
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
          var school = schoolObject["2017"];
          var schoolIsValid = true;
          
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (subjectMath === true ) {
            //   [""0""][2017].academics.program.bachelors.mathematics
            if (school.academics.program.bachelors.mathematics === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (subjectScience === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (subjectSStudies === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (subjectLiberalArts === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }

          if (mensSchool === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }

          if (femaleSchool === true ) {
            if (school.women_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (coedSchool === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }

          if (religiousYes === true ) {
            if (school.religious_affiliation === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (religiousNo === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//not sure if this one is correct
          if (aveAgeYes === true ) {
            if (student.demographics.age_entry === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (aveAgeNo === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (retentionRatesYes === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (retentionRatesNo === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//not sure if this one is correct
          if (averageCostYes === true ) {
            if (cost.program_reporter.program_1.cip_6_digit.full_program === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (averageCostNo === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (aidYes === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//need correct name to be pulled from data dictionary
          if (aidNo === true ) {
            if (school.men_only === 0 ) {
              schoolIsValid = false;
            }
          }


          //after we've done all of our filtering...
          if (schoolIsValid) {
            filteredSchools.push(school);
          }

        })

        //once we have filtered schoools...
        for (var i = 0; i < filteredSchools.length; i++) {
          //create a "repeating element" for each filtered school with jquery
        }
        
    });

    };

     src="https://code.jquery.com/jquery-3.4.1.min.js"
     integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
     crossorigin="anonymous">
     
         
// var cityn = "atlanta";
// var subject = "mathematics";
// var queryURL = `https://api.data.gov/ed/collegescorecard/v1/schools/nearest.json?api_key=HNg7UV31G0EyV08Fh2zkZBi1WNM1XffC3ttbfbw5&school.city=${cityn}&2017.academics.program.bachelors.${subject}=1`;

       
// function pull(){
    
    
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).then((response)=>{
//             console.log(response.results);
//             for (var i = 0; i < response.results.length; i++) {
//               //[7].school.name
//               var school
//               console.log(response.results[i].school.name);
//               var Schoolname = response.results[i].school.name;
//            //    console.log(response.results[i].school.city);
//               var SchoolCSZ = response.results[i].school.city+", "+response.results[i].school.state+" "+response.results[i].school.zip;
//            //    console.log(response.results[i].school.state);
//               console.log(SchoolCSZ);
//            //    var N = toString(90th_percentile);
//            //    var Percentile =[""90th_percentile""]
           
//               var SchoolDebtAvg = response.results[i].latest.aid.cumulative_debt["90th_percentile"];
//               console.log(SchoolDebtAvg);
//             };
    
//         });
// }
 
function cscard() {
        
    //  src="https://code.jquery.com/jquery-3.4.1.min.js"
    //  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    //  crossorigin="anonymous"
    
         
         var cityn = "atlanta";
         var subject = "mathematics";
         var queryURL = `https://api.data.gov/ed/collegescorecard/v1/schools/nearest.json?api_key=HNg7UV31G0EyV08Fh2zkZBi1WNM1XffC3ttbfbw5&school.city=${cityn}`;
 
     $.ajax({
       url: queryURL,
       method: "GET"
     }).then((response)=>{
         console.log(response.results);
        // ResultsDisplay();         

        for (var i = 0; i < response.results.length; i++) {
            var a = $("<div>");
            a.addClass("card");
            var Schoolname = response.results[i].school.name;
            a.attr("data-name", Schoolname);
            a.text(Schoolname);
            var b = $("<div>");
            b.addClass("card-body");
            var c = $("<h5>");
            c.addClass("card-title");
            c.text(Schoolname);
            var d = $("<p>");
            d.addClass("card-text");
            var SchoolCSZ = response.results[i].school.city+", "+response.results[i].school.state+" "+response.results[i].school.zip;
            var SchoolDebtAvg = response.results[i].latest.aid.cumulative_debt["90th_percentile"];
            var SchoolEarningMed = response.results[i].latest.earnings["10_yrs_after_entry"].median
            d.append(SchoolCSZ);
            d.append("avg sudent debt: $"+SchoolDebtAvg);
            d.append("med sudent earning in 10yrs: $"+SchoolEarningMed);
            //[7].school.name
            //    var school
            // console.log(response.results[i].school.name);
            //    console.log(response.results[i].school.city);
            //    console.log(response.results[i].school.state);
            // console.log(SchoolCSZ);
            //    var N = toString(90th_percentile);
            //    var Percentile =[""90th_percentile""]
        
            console.log(SchoolDebtAvg);
            b.append(d);
            b.prepend(c);
            a.append(b);
            $("#results").append(a)
        };
        
 
     });
 
    };

    $(document).on("click", "#start", cscard);
 
 
 
       /*
     var school = "atlanta";
          var queryURL = `https://api.data.gov/Treasury/collegescorecard/v1/schools/nearest.json?api_key=HNg7UV31G0EyV08Fh2zkZBi1WNM1XffC3ttbfbw5&school.city=atlanta`;
         
 
 
     $.ajax({
       url: queryURL,
       method: "GET"
     }).then((response)=>{
         console.log(response);
     });
 */
