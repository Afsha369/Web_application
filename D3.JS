<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complex Shapes</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <style>
        svg {
            background-color: #f0f0f0;
        }

        .shape {
            fill: skyblue;
            stroke: #333;
            stroke-width: 2;
        }
  .shape {
    transition: transform 0.3s ease-in-out;
  }

  .shape:hover {
    transform: scale(1.1);
  }
.label{
font-family:Arial,sans-serif;
font-size:14px;
fill:#333;
text-anchor:middle;
}
    </style>
</head>

<body>
    <svg width="800" height="600"></svg>

    <script>
        // Define the SVG container
        const svg = d3.select("svg");

        // Draw a circle
        svg.append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 50)
            .attr("class", "shape");

	//Label for circle
	svg.append("text")
	   .attr("x",100)
	   .attr("y",170)
	   .attr("class","label")
	   .text("Circle");

	//draw an ellipse
	svg.append("ellipse")
	   .attr("cx",200)
	   .attr("cy",440)
	   .attr("rx",80)
	   .attr("ry",40)
	   .attr("class","shape");

	//label for ellipse
        svg.append("text")
           .attr("x",200)
           .attr("y",570)
           .attr("class","label")
           .text("Ellipse");


        // Draw a rectangle
        svg.append("rect")
            .attr("x", 200)
            .attr("y", 50)
            .attr("width", 100)
            .attr("height", 80)
            .attr("class", "shape");

        //Label for rectangle
        svg.append("text")
           .attr("x",250)
           .attr("y",150)
           .attr("class","label")
           .text("Rectangle");


        // Draw a square
        svg.append("rect")
            .attr("x", 550)
            .attr("y", 100)
            .attr("width", 100)
            .attr("height",100)
            .attr("class", "shape");

        //Label for square
        svg.append("text")
           .attr("x",600)
           .attr("y",220)
           .attr("class","label")
           .text("Square");



        // Draw a triangle
        const trianglePoints = "300,200 400,50 500,200";
        svg.append("polygon")
            .attr("points", trianglePoints)
            .attr("class", "shape");

        //Label for triangle
        svg.append("text")
           .attr("x",400)
           .attr("y",220)
           .attr("class","label")
           .text("Triangle");


        // Draw a star
        const starPoints = "450,350 470,400 520,410 480,440 500,490 450,460 400,490 420,440 380,410 430,400";
        svg.append("polygon")
            .attr("points", starPoints)
            .attr("class", "shape");

        //Label for star
        svg.append("text")
           .attr("x",450)
           .attr("y",510)
           .attr("class","label")
           .text("Star");

    </script>
</body>

</html>
