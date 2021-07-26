
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

function radarChartAType(variableClass) {
    // chart star radar chart(둥근 모양) https://www.amcharts.com/docs/v4/tutorials/category/radar/
    // reference https://www.amcharts.com/demos/#radar
    am4core.useTheme(am4themes_animated)
    const chart = am4core.create(variableClass, am4charts.RadarChart)

    chart.colors.list = [
        am4core.color('#fbcac9'),
        am4core.color('#8ca6ce'),
        am4core.color('#8c92ce')
    ]

    let dy_list = [
        20,
        25,
        30
    ]

    // chart data
    chart.data = [{
        'category': 'Home',
        'value': 76,
        'full': 100
    }, {
        'category': 'Survey',
        'value': 100,
        'full': 100
    }, {
        'category': 'Skill',
        'value': 4,
        'full': 100
    }]

    // 차트 설정
    chart.startAngle = 10
    chart.endAngle = 300
    chart.innerRadius = am4core.percent(80)

    // 중앙에 있는 숫자
    const centerLabel = chart.radarContainer.createChild(am4core.Label)
    centerLabel.horizontalCenter = 'middle'
    centerLabel.verticalCenter = 'middle'
    centerLabel.fill = am4core.color('#fff')
    centerLabel.fontSize = am4core.percent(300)
    centerLabel.text = String('60%')

    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'"

    // Create axes (축은 대부분의 XY 및 일부 다른 차트 유형에서 중요한 부분이며, 다른 임의 시각적 데이터에 대한 척도 또는 그룹화를 제공합니다.) https://www.amcharts.com/docs/v4/concepts/axes/
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis()) // https://www.amcharts.com/docs/v4/reference/categoryaxis/
    categoryAxis.dataFields.category = 'category'
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.grid.template.strokeOpacity = 0
    categoryAxis.renderer.labels.template.horizontalCenter = 'left'
    categoryAxis.renderer.labels.template.verticalCenter = 'left'
    categoryAxis.renderer.labels.template.fontWeight = 300
    categoryAxis.renderer.labels.template.fontSize = 14
    categoryAxis.renderer.labels.template.adapter.add('dy', function (dy, target) {
        return (target.dataItem.index >= 0) ? dy_list[target.dataItem.index] : dy
    })
    categoryAxis.renderer.labels.template.dx = 100
    categoryAxis.renderer.labels.template.adapter.add('fill', function (fill, target) {
        return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill
    })
    categoryAxis.renderer.minGridDistance = 10
    categoryAxis.renderer.inversed = true
    categoryAxis.renderer.cellStartLocation = 0.2
    categoryAxis.renderer.cellEndLocation = 0.9

    // 테두리 숫자
    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis())  // https://www.amcharts.com/docs/v4/reference/valueaxis/
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.min = 0
    valueAxis.max = 100
    valueAxis.strictMinMax = true
    valueAxis.renderer.inversed = true
    valueAxis.renderer.labels.template.fill = am4core.color('#fff')

    // Create series (시리즈는 다중 값 데이터 요소로 구성된 유사하고 논리적으로 그룹화된 데이터 포인트의 모음을 의미합니다)
    const series1 = chart.series.push(new am4charts.RadarColumnSeries()) // chart 의 3D 세로 막대 그래프를 정의. https://www.amcharts.com/docs/v4/reference/radarcolumnseries/#Sources
    series1.dataFields.valueX = 'full'
    series1.dataFields.categoryY = 'category'
    series1.clustered = false
    series1.columns.template.fill = am4core.color('#fff')
    series1.columns.template.fillOpacity = 0.3
    series1.columns.template.cornerRadiusTopLeft = 20
    series1.columns.template.strokeWidth = 0
    series1.columns.template.radarColumn.cornerRadius = 20

    const series2 = chart.series.push(new am4charts.RadarColumnSeries())
    series2.dataFields.valueX = 'value'
    series2.dataFields.categoryY = 'category'
    series2.clustered = false
    series2.columns.template.strokeWidth = 0
    series2.columns.template.tooltipText = '{category}: [bold]{value}[/]'
    series2.columns.template.radarColumn.cornerRadius = 20
    series2.columns.template.adapter.add('fill', function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index)
    })

    const series3 = chart.series.push(new am4charts.RadarColumnSeries())
    series3.dataFields.valueX = 'value'
    series3.dataFields.categoryY = 'category'
    series3.clustered = false
    series3.columns.template.strokeWidth = 0
    series3.columns.template.tooltipText = '{category}: [bold]{value}[/]'
    series3.columns.template.radarColumn.cornerRadius = 20
    series3.columns.template.adapter.add('fill', function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index)
    })
    // Add cursor
    chart.cursor = new am4charts.RadarCursor()
    // chart end
}

export default radarChartAType;
