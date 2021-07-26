import React, {useState, useEffect} from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import Hero from 'components/Hero/Hero';
import Container from 'components/Container/Container';
import NavContent from 'components/NavContent/NavContent';
import ImageCard from 'components/ImageCard/ImageCard';
import Chart from 'components/Chart/Chart';
import ContactUs from 'components/ContactUs/ContactUs';

function Main(props) {
    const imageList = [
        './heroImage.png', // hero image
        'https://dummyimage.com/48x48/ff2727/fff', // imageCard icon
        'https://dummyimage.com/48x48/ff9d0c/fff', // imageCard icon
        'https://dummyimage.com/48x48/080/fff', // imageCard icon
    ]
    const titleList = [
        '리엑트 메인 페이지', // hero title
        '빨간색', // imageCard title
        '주황색', // imageCard title
        '초록색' // imageCard title
    ]
    const descList = [
        '리엑트를 사용해 만든 SPA(Single Page App)입니다.',
        '눈에 띄는 강렬함으로 알려진 빨간색은 강한 감정적인 반응을 불러일으킵니다. 빨간색은 식욕, 흥분, 불안을 높일 수 있습니다.',
        '주황색은 빨간색의 강렬함과 노란색의의 활기를 합친 것입니다. 보통 자신감, 활동성, 새로운 출발을 의미합니다.',
        '다양하게 쓰일 수 있는 이 색상은 종종 울창한 숲, 풍성한 수확, 번영을 연상시키고 성장, 안전, 재생과 관련된 느낌을 줍니다. '
    ]
    const navContentList = [
        {
            id: '1',
            title: 'Multiple Color',
            contentType: 'img',
            content: [
                'https://dummyimage.com/240x240/ee3239/fff',
                'https://dummyimage.com/240x240/5eaa5f/fff',
                'https://dummyimage.com/240x240/fece00/fff',
                'https://dummyimage.com/240x240/9d6ab9/fff',
                'https://dummyimage.com/240x240/bedae5/fff',
                'https://dummyimage.com/240x240/1f1762/fff',
                'https://dummyimage.com/240x240/ffc2c3/fff',
                'https://dummyimage.com/240x240/642a02/fff',
                'https://dummyimage.com/240x240/7bc5ae/fff',
                'https://dummyimage.com/240x240/9c8f96/fff'
            ]
        }, {
            id: '2',
            title: 'Brightness',
            contentType: 'img',
            content: [
                'https://dummyimage.com/240x240/000/fff',
                'https://dummyimage.com/240x240/111/fff',
                'https://dummyimage.com/240x240/222/fff',
                'https://dummyimage.com/240x240/333/fff',
                'https://dummyimage.com/240x240/444/fff',
                'https://dummyimage.com/240x240/555/fff',
                'https://dummyimage.com/240x240/666/fff',
                'https://dummyimage.com/240x240/777/fff',
                'https://dummyimage.com/240x240/999/fff',
                'https://dummyimage.com/240x240/fff/000',
            ]
        }, {
            id: '3',
            title: 'Saturation',
            contentType: 'img',
            content: [
                'https://dummyimage.com/240x240/ff0000/fff',
                'https://dummyimage.com/240x240/e30000/fff',
                'https://dummyimage.com/240x240/c40202/fff',
                'https://dummyimage.com/240x240/be0000/fff',
                'https://dummyimage.com/240x240/ad0000/fff',
                'https://dummyimage.com/240x240/8e0000/fff',
                'https://dummyimage.com/240x240/6d0000/fff',
                'https://dummyimage.com/240x240/530000/fff',
                'https://dummyimage.com/240x240/270000/fff',
                'https://dummyimage.com/240x240/000000/fff'
            ]
        }, {
            id: '4',
            title: 'Description',
            contentType: 'text',
            content: <p>여러분께서는 의도적으로든 아니든 늘 색상을 결정합니다. 보통 본능적으로 색을 결정하지만,<br/>
                실제로는 색채 이론이라는 이 모든 것을 설명하는 과학 분야가 있습니다.<br/>
                색채 이론은 서로 다른 색이 어떻게 관련되어 있는지와 여러 색채 조합과 합쳐졌을 때 어떻게 보이는지를 설명합니다.<br/>
                색채 이론에서 파생된 색채 심리학은 색상과 감정을 설명합니다.<br/>
                이 두 가지 분야의 색채 지식은 이벤트를 알리기 위한 전단지를 만들어야 하는 소기업 사장,<br/>
                프로젝트에 어울리는 색채 배합을 골라야 하는 디자이너,<br/>
                새로운 스타트업의 로고를 디자인하고자 하는 기업가와 관계없이 색상을 다루는 모든 사람에게 중요한 정보입니다.</p>
        }
    ]
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [navContentItem, setNavContentItem] = useState([])
    let containerList = [
        {
            id: 1,
            backgroundColor: 'blackBg',
            content: navContentItem
        }, {
            id: 2,
            backgroundColor: 'lightBrownBg',
            content: <div className='imageCardRow'>
                <ImageCard key={'1'} itemCount={'3'} image={imageList[1]} title={titleList[1]}
                           description={descList[1]}/>
                <ImageCard key={'2'} itemCount={'3'} image={imageList[2]} title={titleList[2]}
                           description={descList[2]}/>
                <ImageCard key={'3'} itemCount={'3'} image={imageList[3]} title={titleList[3]}
                           description={descList[3]}/>
            </div>
        }, {
            id: 3,
            backgroundColor: 'blackBg',
            content: <Chart title='Completeness'/>
        }, {
            id: 4,
            backgroundColor: 'whiteBg',
            content: <ContactUs/>
        }
    ]

    function navContentBtn(selectIndex) {
        setCurrentContentIndex(selectIndex)
    }

    function navContentIndex() {
        let selectNavContentList = navContentList[currentContentIndex]
        setNavContentItem(
            <NavContent key={selectNavContentList.id}
                        onClick={navContentBtn}
                        contentCount={navContentList.length}
                        title={selectNavContentList.title}
                        currentIndex={currentContentIndex}
                        contentType={selectNavContentList.contentType}
                        content={selectNavContentList.content}/>
        )
    }

    useEffect(() => {
        navContentIndex()
    }, [currentContentIndex]);

    // chart star
    am4core.useTheme(am4themes_animated);
    const chart = am4core.create('chartDiv', am4charts.RadarChart);

    chart.colors.list = [
        am4core.color('#fbcac9'),
        am4core.color('#8ca6ce'),
        am4core.color('#8c92ce')
    ];

    let dy_list = [
        20,
        25,
        30
    ];

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
    }];

    // 테두리 C
    chart.startAngle = 10;
    chart.endAngle = 300;
    chart.innerRadius = am4core.percent(80);

    // 중앙에 있는 숫자
    const centerLabel = chart.radarContainer.createChild(am4core.Label);
    centerLabel.horizontalCenter = 'middle';
    centerLabel.verticalCenter = 'middle';
    centerLabel.fill = am4core.color('#fff');
    centerLabel.fontSize = am4core.percent(300);
    centerLabel.text = String('60%');

    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Create axes
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.verticalCenter = 'left';
    categoryAxis.renderer.labels.template.fontWeight = 300;
    categoryAxis.renderer.labels.template.fontSize = 14;
    categoryAxis.renderer.labels.template.adapter.add('dy', function (dy, target) {
        return (target.dataItem.index >= 0) ? dy_list[target.dataItem.index] : dy;
    });
    categoryAxis.renderer.labels.template.dx = 100;
    categoryAxis.renderer.labels.template.adapter.add('fill', function (fill, target) {
        return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.cellStartLocation = 0.2
    categoryAxis.renderer.cellEndLocation = 0.9

    // 테두리 숫자
    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.inversed = true;
    valueAxis.renderer.labels.template.fill = am4core.color('#fff');

    // Create series(차트 단위)
    const series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = 'full';
    series1.dataFields.categoryY = 'category';
    series1.clustered = false;
    series1.columns.template.fill = am4core.color('#fff');
    series1.columns.template.fillOpacity = 0.3;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    const series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = 'value';
    series2.dataFields.categoryY = 'category';
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = '{category}: [bold]{value}[/]';
    series2.columns.template.radarColumn.cornerRadius = 20;
    series2.columns.template.adapter.add('fill', function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    });

    const series3 = chart.series.push(new am4charts.RadarColumnSeries());
    series3.dataFields.valueX = 'value';
    series3.dataFields.categoryY = 'category';
    series3.clustered = false;
    series3.columns.template.strokeWidth = 0;
    series3.columns.template.tooltipText = '{category}: [bold]{value}[/]';
    series3.columns.template.radarColumn.cornerRadius = 20;
    series3.columns.template.adapter.add('fill', function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    });
    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
    // chart end

    return <section className='wrap'>
        <Hero image={imageList[0]} title={titleList[0]} description={descList[0]}/>
        {containerList.map((item, i) =>
            <Container key={i} backgroundColor={item.backgroundColor} content={item.content}/>
        )}
    </section>
}

export default Main;

