<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Find Your Fit</title>
</head>
<body>
<script
src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous"></script>

<script>
      
var school = "school";
var queryURL = `https://api.data.gov/ed/collegescorecard/v1/schools/nearest.json?api_key=HNg7UV31G0EyV08Fh2zkZBi1WNM1XffC3ttbfbw5&`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then((response)=>{
      console.log(response);
  });
      
</script>
</body>
</html>