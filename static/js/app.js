let dropdownMenu = d3.select("#selDataset");

link='https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(link).then((data)=>{
    console.log(data)
})

