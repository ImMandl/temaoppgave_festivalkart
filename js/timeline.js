const options = {
    chart: {
        type: 'column',
        renderTo: 'container',
        styledMode: true
    },

    title: {
        text: 'Antall deltagere på TG gjennom årene'
    },

    yAxis: {
        className: 'highcharts-color-0',
        min: 1000,
        max: 6000,
        title: {
            text: 'Antall deltagere'
        }
    },
    xAxis: {
        categories: [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
    },
    plotOptions: {
        column: {
            borderRadius: 5
        }
    },

    series: [{
        name: 'Antall personer',
        data: [1100, 1400, 1800, 1500, 2500, 3300, 4300, 4300, 4300, 4300, 4300, 5000, 5200, 5200, 5200, 5200, 5200, 5200, 5200, 5000, 5000, 5100, 5200, 5000, 5000, 5500, 5500, 5000]
    },]
}

const chart = new Highcharts.Chart(options)


/* Refrence to HTML */
const internett = document.querySelector("#internett-btn");
const deltager = document.querySelector("#deltager-btn");

// Changes statistics to internet statistics
internett.onclick = () => {
    chart.title.update(
        { text: 'Internett hastighet gjennom årene (Gikk fra Mbit/s til Gbit/s i 2003)' }
    )
    chart.yAxis[0].update(
        {
            min: 0,
            max: 200,
            title: {
                text: 'Internett hastighet'
            }
        }
    )
    chart.series[0].update(
        {
            name: 'Hastighet på nettet',
            data: [0, 0, 0, 0, 2, 2, 6, 35, 35, 50, 155, 1, 1, 1, 1.5, 2, 3, 5, 30, 100, 200, 30, 30, 30, 40, 40, 40, 40]
        }
    )
}

// Changes statistics to participants statistics
deltager.onclick = () => {
    chart.title.update(
        { text: 'Antall deltagere på TG gjennom årene' }
    )
    chart.yAxis[0].update(
        {
            min: 1000,
            max: 6000,
            title: {
                text: 'Antall deltagere'
            }
        }
    )
    chart.series[0].update(
        {
            name: 'Antall personer',
            data: [1100, 1400, 1800, 1500, 2500, 3300, 4300, 4300, 4300, 4300, 4300, 5000, 5200, 5200, 5200, 5200, 5200, 5200, 5200, 5000, 5000, 5100, 5200, 5000, 5000, 5500, 5500, 5000]
        }
    )
}
