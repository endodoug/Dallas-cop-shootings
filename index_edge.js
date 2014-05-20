/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['abril-fatface, serif']='<script src=\"http://use.edgefonts.net/abril-fatface:n4,i4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Background',
                type: 'rect',
                rect: ['0px', '0px','820px','400px','auto', 'auto'],
                fill: ["rgba(64,57,57,1.00)",[270,[['rgba(81,44,139,1.00)',0],['rgba(72,8,8,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle7Copy',
                type: 'rect',
                rect: ['109px', '229px','2px','65px','auto', 'auto'],
                fill: ["rgba(32,157,30,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['36px', '297px','auto','auto','auto', 'auto'],
                text: "David Kunkle  Police Chief<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65)", 3, 3, 3]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['454px', '297px','auto','auto','auto', 'auto'],
                text: "David Brown  Chief of Police<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65)", 3, 3, 3]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['776px', '248px','auto','auto','auto', 'auto'],
                text: "2014",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['706px', '248px','auto','auto','auto', 'auto'],
                text: "2013",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['635px', '248px','auto','auto','auto', 'auto'],
                text: "2012",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['567px', '248px','auto','auto','auto', 'auto'],
                text: "2011",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['496px', '248px','auto','auto','auto', 'auto'],
                text: "2010",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['427px', '248px','auto','auto','auto', 'auto'],
                text: "2009",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['357px', '248px','auto','auto','auto', 'auto'],
                text: "2008",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['285px', '248px','auto','auto','auto', 'auto'],
                text: "2007",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['147px', '248px','auto','auto','auto', 'auto'],
                text: "2005",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['77px', '248px','auto','auto','auto', 'auto'],
                text: "2004",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['215px', '248px','auto','auto','auto', 'auto'],
                text: "2006",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['5px', '248px','auto','auto','auto', 'auto'],
                text: "2003",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1.00)", "normal", "none", ""]
            },
            {
                id: 'Timeline',
                type: 'group',
                rect: ['19', '227','771','17','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle5',
                    type: 'rect',
                    rect: ['699px', '2px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle5Copy',
                    type: 'rect',
                    rect: ['769px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'years',
                    type: 'rect',
                    rect: ['1px', '0px','770px','1px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4',
                    type: 'rect',
                    rect: ['0px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy',
                    type: 'rect',
                    rect: ['70px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy2',
                    type: 'rect',
                    rect: ['140px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy3',
                    type: 'rect',
                    rect: ['210px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy4',
                    type: 'rect',
                    rect: ['280px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy5',
                    type: 'rect',
                    rect: ['350px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy6',
                    type: 'rect',
                    rect: ['420px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy7',
                    type: 'rect',
                    rect: ['490px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy8',
                    type: 'rect',
                    rect: ['560px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy9',
                    type: 'rect',
                    rect: ['630px', '1px','2px','15px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: '_2003-1',
                type: 'rect',
                rect: ['20px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2003-2',
                type: 'rect',
                rect: ['30px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2003-3',
                type: 'rect',
                rect: ['40px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2003-4',
                type: 'rect',
                rect: ['50px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2003-5',
                type: 'rect',
                rect: ['60px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2003-6',
                type: 'rect',
                rect: ['70px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2004-1',
                type: 'rect',
                rect: ['20px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2004-2',
                type: 'rect',
                rect: ['30px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2004-3',
                type: 'rect',
                rect: ['40px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2004-4',
                type: 'rect',
                rect: ['50px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2004-5',
                type: 'rect',
                rect: ['60px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2005-1',
                type: 'rect',
                rect: ['170px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2005-2',
                type: 'rect',
                rect: ['180px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2005-3-cop',
                type: 'rect',
                rect: ['190px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(56,32,241,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2006-1',
                type: 'rect',
                rect: ['240px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2006-2',
                type: 'rect',
                rect: ['250px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2007-1',
                type: 'rect',
                rect: ['240px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2007-2',
                type: 'rect',
                rect: ['250px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2007-3',
                type: 'rect',
                rect: ['330px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2007-4',
                type: 'rect',
                rect: ['340px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2007-5',
                type: 'rect',
                rect: ['350px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2007-7-cop',
                type: 'rect',
                rect: ['370px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2007-6',
                type: 'rect',
                rect: ['360px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2008-1',
                type: 'rect',
                rect: ['380px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2008-2',
                type: 'rect',
                rect: ['390px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2008-3',
                type: 'rect',
                rect: ['400px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2008-4',
                type: 'rect',
                rect: ['410px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2008-5',
                type: 'rect',
                rect: ['420px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2009-1',
                type: 'rect',
                rect: ['450px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2009-2',
                type: 'rect',
                rect: ['460px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2009-3',
                type: 'rect',
                rect: ['470px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2009-4',
                type: 'rect',
                rect: ['480px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2009-5',
                type: 'rect',
                rect: ['490px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2009-6-cop',
                type: 'rect',
                rect: ['500px', '-65px','7px','15px','auto', 'auto'],
                fill: ["rgba(167,164,249,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-1',
                type: 'rect',
                rect: ['510px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-2',
                type: 'rect',
                rect: ['518px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-3',
                type: 'rect',
                rect: ['527px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-4',
                type: 'rect',
                rect: ['536px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-5',
                type: 'rect',
                rect: ['545px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-6',
                type: 'rect',
                rect: ['554px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-7',
                type: 'rect',
                rect: ['563px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2010-8',
                type: 'rect',
                rect: ['572px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2011-1',
                type: 'rect',
                rect: ['584px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2011-2',
                type: 'rect',
                rect: ['594px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012',
                type: 'rect',
                rect: ['655px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy',
                type: 'rect',
                rect: ['662px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy2',
                type: 'rect',
                rect: ['669px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy4',
                type: 'rect',
                rect: ['676px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy5',
                type: 'rect',
                rect: ['683px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy6',
                type: 'rect',
                rect: ['690px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy7',
                type: 'rect',
                rect: ['697px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy8',
                type: 'rect',
                rect: ['704px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy9',
                type: 'rect',
                rect: ['711px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2012Copy10',
                type: 'rect',
                rect: ['718px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013',
                type: 'rect',
                rect: ['730px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013Copy',
                type: 'rect',
                rect: ['740px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013Copy2',
                type: 'rect',
                rect: ['750px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013Copy3',
                type: 'rect',
                rect: ['760px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013Copy4',
                type: 'rect',
                rect: ['770px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013Copy5',
                type: 'rect',
                rect: ['780px', '-61px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013Copy6',
                type: 'rect',
                rect: ['19px', '336px','7px','15px','auto', 'auto'],
                fill: ["rgba(245,250,175,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2013Copy7',
                type: 'rect',
                rect: ['19px', '356px','7px','15px','auto', 'auto'],
                fill: ["rgba(167,164,249,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle7',
                type: 'rect',
                rect: ['534px', '229px','2px','65px','auto', 'auto'],
                fill: ["rgba(32,157,30,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text15',
                type: 'text',
                rect: ['43px', '23px','738px','auto','auto', 'auto'],
                text: "Fatal Incidents Involving Dallas Police Officers",
                align: "left",
                font: ['abril-fatface, serif', 32, "rgba(239,233,233,1)", "normal", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65)", 3, 3, 3]
            },
            {
                id: 'Text16',
                type: 'text',
                rect: ['35px', '337px','auto','auto','auto', 'auto'],
                text: "Suspect  Killed",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65)", 3, 3, 3]
            },
            {
                id: 'Text17',
                type: 'text',
                rect: ['35px', '356px','auto','auto','auto', 'auto'],
                text: "Officer Killed",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(239,233,233,1)", "normal", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65)", 3, 3, 3]
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['676px', '364px','auto','auto','auto', 'auto'],
                text: "Sources: Dallas Police Dept.<br>              Dallas Morning News<br><br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(239,233,233,1)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__2012Copy7}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '697px'],
                ["style", "width", '7px']
            ],
            "${__2009-5}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '480px'],
                ["style", "width", '7px']
            ],
            "${_Text2}": [
                ["style", "top", '248px'],
                ["style", "left", '77px']
            ],
            "${__2006-1}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '240px'],
                ["style", "width", '7px']
            ],
            "${__2008-2}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '390px'],
                ["style", "width", '7px']
            ],
            "${__2008-5}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '420px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4}": [
                ["style", "left", '0px'],
                ["style", "top", '1px']
            ],
            "${__2008-4}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '410px'],
                ["style", "width", '7px']
            ],
            "${__2007-5}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '340px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4Copy5}": [
                ["style", "left", '350px'],
                ["style", "top", '1px']
            ],
            "${__2012Copy9}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '711px'],
                ["style", "width", '7px']
            ],
            "${__2005-1}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '180px'],
                ["style", "width", '7px']
            ],
            "${__2008-1}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '380px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4Copy4}": [
                ["style", "left", '280px'],
                ["style", "top", '1px']
            ],
            "${__2004-1}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1.00)'],
                ["style", "left", '100px'],
                ["style", "width", '7px']
            ],
            "${__2012Copy5}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '683px'],
                ["style", "width", '7px']
            ],
            "${__2010-5}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '545px'],
                ["style", "width", '7px']
            ],
            "${_Text3}": [
                ["style", "left", '147px'],
                ["style", "top", '248px']
            ],
            "${_Rectangle4Copy3}": [
                ["style", "left", '210px'],
                ["style", "top", '1px']
            ],
            "${__2003-6}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '70px'],
                ["style", "width", '7px']
            ],
            "${__2012Copy2}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '669px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4Copy}": [
                ["style", "left", '70px'],
                ["style", "top", '1px']
            ],
            "${__2009-6-cop}": [
                ["color", "background-color", 'rgba(167,164,249,1.00)'],
                ["style", "top", '-65px'],
                ["style", "left", '490px'],
                ["style", "width", '7px']
            ],
            "${__2004-5}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '140px'],
                ["style", "width", '7px']
            ],
            "${__2007-4}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '330px'],
                ["style", "width", '7px']
            ],
            "${__2013Copy7}": [
                ["color", "background-color", 'rgba(167,164,249,1.00)'],
                ["style", "top", '356px'],
                ["style", "left", '19px'],
                ["style", "width", '7px']
            ],
            "${__2009-2}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '450px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4Copy2}": [
                ["style", "left", '140px'],
                ["style", "top", '1px']
            ],
            "${_years}": [
                ["style", "top", '0px'],
                ["style", "left", '1px'],
                ["style", "width", '770px']
            ],
            "${_Text13}": [
                ["style", "top", '297px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "left", '454px'],
                ["subproperty", "textShadow.offsetV", '3px']
            ],
            "${_Text6}": [
                ["style", "left", '357px'],
                ["style", "top", '248px']
            ],
            "${_Rectangle4Copy9}": [
                ["style", "left", '630px'],
                ["style", "top", '1px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '820px']
            ],
            "${__2003-1}": [
                ["color", "background-color", 'rgba(245,250,175,1.00)'],
                ["style", "top", '-65px'],
                ["style", "left", '20px'],
                ["style", "width", '7px']
            ],
            "${_Background}": [
                ["style", "top", '0px'],
                ["style", "height", '400px'],
                ["gradient", "background-image", [270,[['rgba(81,44,139,1.00)',0],['rgba(72,8,8,1.00)',100]]]],
                ["color", "background-color", 'rgba(64,57,57,1.00)'],
                ["style", "width", '820px']
            ],
            "${_Text15}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '43px'],
                ["style", "font-size", '32px'],
                ["style", "top", '23px'],
                ["style", "font-family", 'abril-fatface, serif'],
                ["style", "width", '738px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)']
            ],
            "${__2003-2}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1.00)'],
                ["style", "left", '30px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle5}": [
                ["style", "left", '699px'],
                ["style", "top", '2px']
            ],
            "${_Text}": [
                ["style", "top", '248px'],
                ["color", "color", 'rgba(239,233,233,1.00)'],
                ["style", "left", '5px'],
                ["style", "font-size", '13px']
            ],
            "${_Text8}": [
                ["style", "left", '496px'],
                ["style", "top", '248px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '1px'],
                ["style", "left", '769px'],
                ["style", "width", '2px']
            ],
            "${__2013Copy4}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '770px'],
                ["style", "width", '7px']
            ],
            "${__2007-2}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '310px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4Copy6}": [
                ["style", "left", '420px'],
                ["style", "top", '1px']
            ],
            "${__2010-3}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '527px'],
                ["style", "width", '7px']
            ],
            "${__2007-7-cop}": [
                ["color", "background-color", 'rgba(174,184,250,1.00)'],
                ["style", "top", '-65px'],
                ["style", "left", '360px'],
                ["style", "width", '7px']
            ],
            "${__2003-5}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '60px'],
                ["style", "width", '7px']
            ],
            "${_Text18}": [
                ["style", "top", '364px'],
                ["style", "left", '676px'],
                ["style", "font-size", '11px']
            ],
            "${__2013Copy6}": [
                ["style", "top", '336px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '19px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle7}": [
                ["color", "background-color", 'rgba(32,157,30,1.00)'],
                ["style", "height", '65px']
            ],
            "${__2010-2}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '518px'],
                ["style", "width", '7px']
            ],
            "${__2009-1}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '440px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4Copy8}": [
                ["style", "left", '560px'],
                ["style", "top", '1px']
            ],
            "${__2013}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '730px'],
                ["style", "width", '7px']
            ],
            "${__2003-3}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '40px'],
                ["style", "width", '7px']
            ],
            "${__2011-1}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '584px'],
                ["style", "width", '7px']
            ],
            "${__2005-3-cop}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(132,121,223,1.00)'],
                ["style", "left", '190px'],
                ["style", "width", '7px']
            ],
            "${__2013Copy}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '740px'],
                ["style", "width", '7px']
            ],
            "${__2007-1}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '300px'],
                ["style", "width", '7px']
            ],
            "${__2013Copy2}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '750px'],
                ["style", "width", '7px']
            ],
            "${_Text10}": [
                ["style", "left", '635px'],
                ["style", "top", '248px']
            ],
            "${_Text7}": [
                ["style", "left", '427px'],
                ["style", "top", '248px']
            ],
            "${_Text9}": [
                ["style", "top", '248px'],
                ["style", "left", '567px']
            ],
            "${__2012Copy8}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '704px'],
                ["style", "width", '7px']
            ],
            "${__2003-4}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '50px'],
                ["style", "width", '7px']
            ],
            "${__2010-1}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '510px'],
                ["style", "width", '7px']
            ],
            "${__2012Copy6}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '690px'],
                ["style", "width", '7px']
            ],
            "${__2012Copy10}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '718px'],
                ["style", "width", '7px']
            ],
            "${__2004-3}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '120px'],
                ["style", "width", '7px']
            ],
            "${__2009-4}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '470px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4Copy7}": [
                ["style", "left", '490px'],
                ["style", "top", '1px']
            ],
            "${_Text5}": [
                ["style", "left", '285px'],
                ["style", "top", '248px']
            ],
            "${__2004-4}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '130px'],
                ["style", "width", '7px']
            ],
            "${__2008-3}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '400px'],
                ["style", "width", '7px']
            ],
            "${__2010-6}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '554px'],
                ["style", "width", '7px']
            ],
            "${_Text11}": [
                ["style", "left", '706px'],
                ["style", "top", '248px']
            ],
            "${__2006-2}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '250px'],
                ["style", "width", '7px']
            ],
            "${__2010-8}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '572px'],
                ["style", "width", '7px']
            ],
            "${__2011-2}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '594px'],
                ["style", "width", '7px']
            ],
            "${__2007-6}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '350px'],
                ["style", "width", '7px']
            ],
            "${__2010-7}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '563px'],
                ["style", "width", '7px']
            ],
            "${__2007-3}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '320px'],
                ["style", "width", '7px']
            ],
            "${__2012}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '655px'],
                ["style", "width", '7px']
            ],
            "${__2012Copy}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '662px'],
                ["style", "width", '7px']
            ],
            "${__2012Copy4}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '676px'],
                ["style", "width", '7px']
            ],
            "${__2009-3}": [
                ["style", "top", '-65px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '460px'],
                ["style", "width", '7px']
            ],
            "${_Text17}": [
                ["style", "top", '356px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "left", '35px'],
                ["subproperty", "textShadow.offsetV", '3px']
            ],
            "${_Text16}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["style", "top", '337px'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "left", '35px'],
                ["style", "font-size", '13px']
            ],
            "${__2010-4}": [
                ["style", "top", '-61px'],
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "left", '536px'],
                ["style", "width", '7px']
            ],
            "${_Text4}": [
                ["style", "left", '215px'],
                ["style", "top", '248px']
            ],
            "${_Text14}": [
                ["style", "top", '297px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "left", '36px'],
                ["subproperty", "textShadow.offsetV", '3px']
            ],
            "${__2005-2}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-65px'],
                ["style", "left", '190px'],
                ["style", "width", '7px']
            ],
            "${_Text12}": [
                ["style", "left", '776px'],
                ["style", "top", '248px']
            ],
            "${__2013Copy3}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '760px'],
                ["style", "width", '7px']
            ],
            "${__2004-2}": [
                ["color", "background-color", 'rgba(245,250,175,1.00)'],
                ["style", "top", '-65px'],
                ["style", "left", '110px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle7Copy}": [
                ["color", "background-color", 'rgba(32,157,30,1)'],
                ["style", "left", '109px'],
                ["style", "height", '65px']
            ],
            "${__2013Copy5}": [
                ["color", "background-color", 'rgba(245,250,175,1)'],
                ["style", "top", '-61px'],
                ["style", "left", '780px'],
                ["style", "width", '7px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 22000,
            autoPlay: true,
            timeline: [
                { id: "eid57", tween: [ "style", "${__2004-5}", "top", '213px', { fromValue: '-65px'}], position: 2750, duration: 250 },
                { id: "eid81", tween: [ "style", "${__2004-1}", "left", '100px', { fromValue: '100px'}], position: 1750, duration: 0 },
                { id: "eid82", tween: [ "style", "${__2004-1}", "left", '100px', { fromValue: '100px'}], position: 2000, duration: 0 },
                { id: "eid308", tween: [ "style", "${__2012Copy8}", "top", '213px', { fromValue: '-61px'}], position: 19250, duration: 250 },
                { id: "eid283", tween: [ "style", "${__2010-7}", "top", '213px', { fromValue: '-61px'}], position: 15500, duration: 250 },
                { id: "eid247", tween: [ "style", "${__2009-1}", "left", '440px', { fromValue: '440px'}], position: 11250, duration: 0 },
                { id: "eid295", tween: [ "style", "${__2012Copy4}", "left", '669px', { fromValue: '676px'}], position: 18250, duration: 250 },
                { id: "eid444", tween: [ "style", "${__2012Copy4}", "left", '670px', { fromValue: '669px'}], position: 18500, duration: 1500 },
                { id: "eid217", tween: [ "style", "${__2008-5}", "top", '213px', { fromValue: '-65px'}], position: 10500, duration: 250 },
                { id: "eid297", tween: [ "style", "${__2012Copy6}", "left", '683px', { fromValue: '690px'}], position: 18750, duration: 250 },
                { id: "eid445", tween: [ "style", "${__2012Copy6}", "left", '684px', { fromValue: '683px'}], position: 19000, duration: 1000 },
                { id: "eid294", tween: [ "style", "${__2012Copy5}", "top", '213px', { fromValue: '-61px'}], position: 18500, duration: 250 },
                { id: "eid302", tween: [ "style", "${__2012Copy}", "top", '213px', { fromValue: '-61px'}], position: 17750, duration: 250 },
                { id: "eid316", tween: [ "style", "${__2013Copy5}", "top", '213px', { fromValue: '-61px'}], position: 21750, duration: 250 },
                { id: "eid199", tween: [ "style", "${__2007-6}", "top", '213px', { fromValue: '-65px'}], position: 7750, duration: 250 },
                { id: "eid314", tween: [ "style", "${__2013Copy3}", "top", '213px', { fromValue: '-61px'}], position: 21250, duration: 250 },
                { id: "eid307", tween: [ "style", "${__2012Copy8}", "left", '697px', { fromValue: '704px'}], position: 19250, duration: 250 },
                { id: "eid449", tween: [ "style", "${__2012Copy8}", "left", '698px', { fromValue: '697px'}], position: 19500, duration: 500 },
                { id: "eid251", tween: [ "style", "${__2009-3}", "left", '460px', { fromValue: '460px'}], position: 11750, duration: 0 },
                { id: "eid49", tween: [ "style", "${__2003-3}", "left", '40px', { fromValue: '40px'}], position: 500, duration: 0 },
                { id: "eid50", tween: [ "style", "${__2003-3}", "left", '40px', { fromValue: '40px'}], position: 750, duration: 0 },
                { id: "eid281", tween: [ "style", "${__2010-2}", "top", '213px', { fromValue: '-61px'}], position: 14250, duration: 250 },
                { id: "eid252", tween: [ "style", "${__2009-2}", "left", '450px', { fromValue: '450px'}], position: 11500, duration: 0 },
                { id: "eid256", tween: [ "style", "${__2009-4}", "top", '213px', { fromValue: '-65px'}], position: 12000, duration: 250 },
                { id: "eid254", tween: [ "style", "${__2009-5}", "top", '213px', { fromValue: '-65px'}], position: 12250, duration: 250 },
                { id: "eid292", tween: [ "style", "${__2012Copy9}", "top", '213px', { fromValue: '-61px'}], position: 19500, duration: 250 },
                { id: "eid200", tween: [ "color", "${__2007-7-cop}", "background-color", 'rgba(174,184,250,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(174,184,250,1.00)'}], position: 8000, duration: 0 },
                { id: "eid60", tween: [ "style", "${__2004-4}", "top", '213px', { fromValue: '-65px'}], position: 2500, duration: 250 },
                { id: "eid280", tween: [ "style", "${__2010-5}", "top", '213px', { fromValue: '-61px'}], position: 15000, duration: 250 },
                { id: "eid309", tween: [ "style", "${__2012Copy2}", "left", '662px', { fromValue: '669px'}], position: 18000, duration: 250 },
                { id: "eid450", tween: [ "style", "${__2012Copy2}", "left", '663px', { fromValue: '662px'}], position: 18250, duration: 1750 },
                { id: "eid257", tween: [ "style", "${__2009-3}", "top", '213px', { fromValue: '-65px'}], position: 11750, duration: 250 },
                { id: "eid282", tween: [ "style", "${__2010-4}", "top", '213px', { fromValue: '-61px'}], position: 14750, duration: 250 },
                { id: "eid276", tween: [ "style", "${__2010-6}", "top", '213px', { fromValue: '-61px'}], position: 15250, duration: 250 },
                { id: "eid192", tween: [ "style", "${__2007-4}", "left", '330px', { fromValue: '330px'}], position: 7250, duration: 0 },
                { id: "eid193", tween: [ "style", "${__2007-4}", "left", '330px', { fromValue: '330px'}], position: 7500, duration: 0 },
                { id: "eid155", tween: [ "style", "${__2007-1}", "left", '300px', { fromValue: '300px'}], position: 6500, duration: 0 },
                { id: "eid156", tween: [ "style", "${__2007-1}", "left", '300px', { fromValue: '300px'}], position: 6750, duration: 0 },
                { id: "eid139", tween: [ "style", "${__2006-1}", "top", '213px', { fromValue: '-65px'}], position: 5500, duration: 250 },
                { id: "eid287", tween: [ "style", "${__2011-2}", "left", '604px', { fromValue: '594px'}], position: 16750, duration: 250 },
                { id: "eid310", tween: [ "style", "${__2012Copy2}", "top", '213px', { fromValue: '-61px'}], position: 18000, duration: 250 },
                { id: "eid258", tween: [ "style", "${__2009-2}", "top", '213px', { fromValue: '-65px'}], position: 11500, duration: 250 },
                { id: "eid32", tween: [ "style", "${__2003-2}", "left", '30px', { fromValue: '30px'}], position: 250, duration: 0 },
                { id: "eid289", tween: [ "style", "${__2011-2}", "top", '213px', { fromValue: '-61px'}], position: 16750, duration: 250 },
                { id: "eid31", tween: [ "style", "${__2003-1}", "top", '213px', { fromValue: '-65px'}], position: 0, duration: 250 },
                { id: "eid255", tween: [ "style", "${__2009-6-cop}", "top", '213px', { fromValue: '-65px'}], position: 12500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid140", tween: [ "style", "${__2006-2}", "top", '213px', { fromValue: '-65px'}], position: 5750, duration: 250 },
                { id: "eid216", tween: [ "style", "${__2008-1}", "top", '212px', { fromValue: '-65px'}], position: 9500, duration: 250 },
                { id: "eid222", tween: [ "style", "${__2008-1}", "top", '213px', { fromValue: '212px'}], position: 9750, duration: 1000 },
                { id: "eid288", tween: [ "style", "${__2011-1}", "left", '594px', { fromValue: '584px'}], position: 16500, duration: 250 },
                { id: "eid191", tween: [ "style", "${__2007-4}", "top", '213px', { fromValue: '-65px'}], position: 7250, duration: 250 },
                { id: "eid203", tween: [ "style", "${__2007-7-cop}", "top", '213px', { fromValue: '-65px'}], position: 8000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid66", tween: [ "style", "${__2004-2}", "top", '213px', { fromValue: '-65px'}], position: 2000, duration: 250 },
                { id: "eid141", tween: [ "style", "${__2006-1}", "left", '240px', { fromValue: '240px'}], position: 5500, duration: 0 },
                { id: "eid142", tween: [ "style", "${__2006-1}", "left", '240px', { fromValue: '240px'}], position: 5750, duration: 0 },
                { id: "eid278", tween: [ "style", "${__2010-1}", "top", '213px', { fromValue: '-61px'}], position: 14000, duration: 250 },
                { id: "eid214", tween: [ "style", "${__2008-2}", "top", '212px', { fromValue: '-65px'}], position: 9750, duration: 250 },
                { id: "eid221", tween: [ "style", "${__2008-2}", "top", '213px', { fromValue: '212px'}], position: 10000, duration: 750 },
                { id: "eid194", tween: [ "style", "${__2007-5}", "left", '340px', { fromValue: '340px'}], position: 7500, duration: 0 },
                { id: "eid195", tween: [ "style", "${__2007-5}", "left", '340px', { fromValue: '340px'}], position: 7750, duration: 0 },
                { id: "eid68", tween: [ "style", "${__2004-1}", "top", '213px', { fromValue: '-65px'}], position: 1750, duration: 250 },
                { id: "eid115", tween: [ "style", "${__2005-1}", "left", '170px', { fromValue: '180px'}], position: 3500, duration: 250 },
                { id: "eid248", tween: [ "style", "${__2009-5}", "left", '480px', { fromValue: '480px'}], position: 12250, duration: 0 },
                { id: "eid18", tween: [ "style", "${__2003-6}", "top", '213px', { fromValue: '-65px'}], position: 1250, duration: 250 },
                { id: "eid157", tween: [ "style", "${__2007-2}", "left", '310px', { fromValue: '310px'}], position: 6750, duration: 0 },
                { id: "eid158", tween: [ "style", "${__2007-2}", "left", '310px', { fromValue: '310px'}], position: 7000, duration: 0 },
                { id: "eid342", tween: [ "style", "${__2013Copy4}", "left", '767px', { fromValue: '770px'}], position: 21500, duration: 250 },
                { id: "eid111", tween: [ "color", "${__2005-3-cop}", "background-color", 'rgba(132,121,223,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(132,121,223,1.00)'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid103", tween: [ "style", "${__2005-2}", "top", '213px', { fromValue: '-65px'}], position: 3750, duration: 250 },
                { id: "eid284", tween: [ "style", "${__2010-2}", "left", '519px', { fromValue: '518px'}], position: 14250, duration: 250 },
                { id: "eid215", tween: [ "style", "${__2008-3}", "top", '212px', { fromValue: '-65px'}], position: 10000, duration: 250 },
                { id: "eid220", tween: [ "style", "${__2008-3}", "top", '213px', { fromValue: '212px'}], position: 10250, duration: 500 },
                { id: "eid196", tween: [ "style", "${__2007-5}", "top", '213px', { fromValue: '-65px'}], position: 7500, duration: 250 },
                { id: "eid291", tween: [ "style", "${__2012Copy9}", "left", '704px', { fromValue: '711px'}], position: 19500, duration: 250 },
                { id: "eid442", tween: [ "style", "${__2012Copy9}", "left", '705px', { fromValue: '704px'}], position: 19750, duration: 250 },
                { id: "eid150", tween: [ "style", "${__2007-2}", "top", '213px', { fromValue: '-65px'}], position: 6750, duration: 250 },
                { id: "eid110", tween: [ "style", "${__2005-3-cop}", "top", '213px', { fromValue: '-65px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid98", tween: [ "style", "${__2005-1}", "top", '213px', { fromValue: '-65px'}], position: 3500, duration: 250 },
                { id: "eid53", tween: [ "style", "${__2003-5}", "left", '60px', { fromValue: '60px'}], position: 1000, duration: 0 },
                { id: "eid54", tween: [ "style", "${__2003-5}", "left", '60px', { fromValue: '60px'}], position: 1250, duration: 0 },
                { id: "eid41", tween: [ "style", "${__2003-5}", "top", '213px', { fromValue: '-65px'}], position: 1000, duration: 250 },
                { id: "eid293", tween: [ "style", "${__2012Copy5}", "left", '676px', { fromValue: '683px'}], position: 18500, duration: 250 },
                { id: "eid443", tween: [ "style", "${__2012Copy5}", "left", '677px', { fromValue: '676px'}], position: 18750, duration: 1250 },
                { id: "eid46", tween: [ "style", "${__2003-2}", "top", '213px', { fromValue: '-65px'}], position: 250, duration: 250 },
                { id: "eid65", tween: [ "style", "${__2004-3}", "top", '213px', { fromValue: '-65px'}], position: 2250, duration: 250 },
                { id: "eid201", tween: [ "style", "${__2007-7-cop}", "left", '360px', { fromValue: '360px'}], position: 8000, duration: 0 },
                { id: "eid202", tween: [ "style", "${__2007-7-cop}", "left", '360px', { fromValue: '360px'}], position: 9000, duration: 0 },
                { id: "eid320", tween: [ "style", "${__2013Copy}", "top", '213px', { fromValue: '-61px'}], position: 20750, duration: 250 },
                { id: "eid441", tween: [ "style", "${__2013Copy}", "top", '213px', { fromValue: '213px'}], position: 21000, duration: 0 },
                { id: "eid45", tween: [ "style", "${__2003-3}", "top", '213px', { fromValue: '-65px'}], position: 500, duration: 250 },
                { id: "eid85", tween: [ "style", "${__2004-3}", "left", '120px', { fromValue: '120px'}], position: 1750, duration: 0 },
                { id: "eid86", tween: [ "style", "${__2004-3}", "left", '120px', { fromValue: '120px'}], position: 2250, duration: 0 },
                { id: "eid218", tween: [ "style", "${__2008-4}", "top", '212px', { fromValue: '-65px'}], position: 10250, duration: 250 },
                { id: "eid219", tween: [ "style", "${__2008-4}", "top", '213px', { fromValue: '212px'}], position: 10500, duration: 250 },
                { id: "eid47", tween: [ "style", "${__2003-1}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${__2003-1}", "left", '20px', { fromValue: '20px'}], position: 250, duration: 0 },
                { id: "eid341", tween: [ "style", "${__2013}", "left", '727px', { fromValue: '730px'}], position: 20500, duration: 250 },
                { id: "eid322", tween: [ "style", "${__2013}", "top", '213px', { fromValue: '-61px'}], position: 20500, duration: 250 },
                { id: "eid303", tween: [ "style", "${__2012Copy10}", "left", '712px', { fromValue: '718px'}], position: 19750, duration: 250 },
                { id: "eid184", tween: [ "style", "${__2007-3}", "left", '320px', { fromValue: '320px'}], position: 7000, duration: 0 },
                { id: "eid185", tween: [ "style", "${__2007-3}", "left", '320px', { fromValue: '320px'}], position: 7250, duration: 0 },
                { id: "eid337", tween: [ "style", "${__2013Copy3}", "left", '757px', { fromValue: '760px'}], position: 21250, duration: 250 },
                { id: "eid55", tween: [ "style", "${__2003-6}", "left", '70px', { fromValue: '70px'}], position: 1250, duration: 0 },
                { id: "eid56", tween: [ "style", "${__2003-6}", "left", '70px', { fromValue: '70px'}], position: 1500, duration: 0 },
                { id: "eid279", tween: [ "style", "${__2010-8}", "top", '213px', { fromValue: '-61px'}], position: 15750, duration: 250 },
                { id: "eid253", tween: [ "style", "${__2009-1}", "top", '213px', { fromValue: '-65px'}], position: 11250, duration: 250 },
                { id: "eid290", tween: [ "style", "${__2011-1}", "top", '213px', { fromValue: '-61px'}], position: 16500, duration: 250 },
                { id: "eid318", tween: [ "style", "${__2013Copy2}", "top", '213px', { fromValue: '-61px'}], position: 21000, duration: 250 },
                { id: "eid296", tween: [ "style", "${__2012Copy4}", "top", '213px', { fromValue: '-61px'}], position: 18250, duration: 250 },
                { id: "eid298", tween: [ "style", "${__2012Copy6}", "top", '213px', { fromValue: '-61px'}], position: 18750, duration: 250 },
                { id: "eid114", tween: [ "style", "${__2005-2}", "left", '180px', { fromValue: '190px'}], position: 3500, duration: 250 },
                { id: "eid101", tween: [ "style", "${__2005-2}", "left", '180px', { fromValue: '180px'}], position: 4000, duration: 0 },
                { id: "eid305", tween: [ "style", "${__2012Copy7}", "left", '690px', { fromValue: '697px'}], position: 19000, duration: 250 },
                { id: "eid448", tween: [ "style", "${__2012Copy7}", "left", '691px', { fromValue: '690px'}], position: 19250, duration: 750 },
                { id: "eid299", tween: [ "style", "${__2012}", "left", '648px', { fromValue: '655px'}], position: 17500, duration: 250 },
                { id: "eid446", tween: [ "style", "${__2012}", "left", '649px', { fromValue: '648px'}], position: 17750, duration: 2250 },
                { id: "eid338", tween: [ "style", "${__2013Copy5}", "left", '777px', { fromValue: '780px'}], position: 21750, duration: 250 },
                { id: "eid197", tween: [ "style", "${__2007-6}", "left", '350px', { fromValue: '350px'}], position: 7750, duration: 0 },
                { id: "eid198", tween: [ "style", "${__2007-6}", "left", '350px', { fromValue: '350px'}], position: 8000, duration: 0 },
                { id: "eid340", tween: [ "style", "${__2013Copy}", "left", '737px', { fromValue: '740px'}], position: 20750, duration: 250 },
                { id: "eid151", tween: [ "style", "${__2007-1}", "top", '213px', { fromValue: '-65px'}], position: 6500, duration: 250 },
                { id: "eid83", tween: [ "style", "${__2004-2}", "left", '110px', { fromValue: '110px'}], position: 1750, duration: 0 },
                { id: "eid84", tween: [ "style", "${__2004-2}", "left", '110px', { fromValue: '110px'}], position: 2000, duration: 0 },
                { id: "eid249", tween: [ "style", "${__2009-6-cop}", "left", '490px', { fromValue: '490px'}], position: 12500, duration: 0 },
                { id: "eid250", tween: [ "style", "${__2009-4}", "left", '470px', { fromValue: '470px'}], position: 12000, duration: 0 },
                { id: "eid306", tween: [ "style", "${__2012Copy7}", "top", '213px', { fromValue: '-61px'}], position: 19000, duration: 250 },
                { id: "eid137", tween: [ "style", "${__2006-2}", "left", '250px', { fromValue: '250px'}], position: 5750, duration: 0 },
                { id: "eid304", tween: [ "style", "${__2012Copy10}", "top", '213px', { fromValue: '-61px'}], position: 19750, duration: 250 },
                { id: "eid277", tween: [ "style", "${__2010-3}", "top", '213px', { fromValue: '-61px'}], position: 14500, duration: 250 },
                { id: "eid89", tween: [ "style", "${__2004-5}", "left", '140px', { fromValue: '140px'}], position: 1750, duration: 0 },
                { id: "eid90", tween: [ "style", "${__2004-5}", "left", '140px', { fromValue: '140px'}], position: 2750, duration: 0 },
                { id: "eid300", tween: [ "style", "${__2012}", "top", '213px', { fromValue: '-61px'}], position: 17500, duration: 250 },
                { id: "eid87", tween: [ "style", "${__2004-4}", "left", '130px', { fromValue: '130px'}], position: 1750, duration: 0 },
                { id: "eid88", tween: [ "style", "${__2004-4}", "left", '130px', { fromValue: '130px'}], position: 2500, duration: 0 },
                { id: "eid301", tween: [ "style", "${__2012Copy}", "left", '655px', { fromValue: '662px'}], position: 17750, duration: 250 },
                { id: "eid447", tween: [ "style", "${__2012Copy}", "left", '656px', { fromValue: '655px'}], position: 18000, duration: 2000 },
                { id: "eid339", tween: [ "style", "${__2013Copy2}", "left", '747px', { fromValue: '750px'}], position: 21000, duration: 250 },
                { id: "eid43", tween: [ "style", "${__2003-4}", "top", '213px', { fromValue: '-65px'}], position: 750, duration: 250 },
                { id: "eid324", tween: [ "style", "${__2013Copy4}", "top", '213px', { fromValue: '-61px'}], position: 21500, duration: 250 },
                { id: "eid186", tween: [ "style", "${__2007-3}", "top", '213px', { fromValue: '-65px'}], position: 7000, duration: 250 },
                { id: "eid51", tween: [ "style", "${__2003-4}", "left", '50px', { fromValue: '50px'}], position: 750, duration: 0 },
                { id: "eid52", tween: [ "style", "${__2003-4}", "left", '50px', { fromValue: '50px'}], position: 1000, duration: 0 },
                { id: "eid106", tween: [ "style", "${__2005-3-cop}", "left", '190px', { fromValue: '190px'}], position: 4000, duration: 0 },
                { id: "eid107", tween: [ "style", "${__2005-3-cop}", "left", '190px', { fromValue: '190px'}], position: 5000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-17685149");
