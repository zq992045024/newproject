const Mock = require("mockjs");

var data = Mock.mock({
    "data|2":[
        {
            "nm":"北京",
            "id":1,
            "cityId":2,
            "isHot":1,
            "yp":"Beijing"
        },
        {
            "nm":"上海",
            "id":2,
            "cityId":2,
            "isHot":1,
            "yp":"shanghai"
        },
        {
            "nm":"天津",
            "id":3,
            "cityId":10,
            "isHot":1,
            "yp":"tianjin"
        },
        {
            "nm":"广元",
            "id":4,
            "cityId":243,
            "isHot":0,
            "yp":"guangxi"
        },
        {
            "nm":"深圳",
            "id":5,
            "cityId":7,
            "isHot":0,
            "yp":"shenzhen"
        },
        {
            "nm":"包头",
            "id":6,
            "cityId":47,
            "isHot":0,
            "yp":"baotou"
        },
        {
            "nm":"合肥",
            "id":7,
            "cityId":110,
            "isHot":0,
            "yp":"heilongjiang"
        },
        {
            "nm":"吉林",
            "id":8,
            "cityId":71,
            "isHot":0,
            "yp":"jilin"
        },
        {
            "nm":"澳门",
            "id":9,
            "cityId":342,
            "isHot":0,
            "yp":"aomen"
        },
        {
            "nm":"长春",
            "id":9,
            "cityId":70,
            "isHot":0,
            "yp":"changchun"
        },
        {
            "nm":"成都",
            "id":10,
            "cityId":8,
            "isHot":0,
            "yp":"chengdu"
        },
        {
            "nm":"大连",
            "id":11,
            "cityId":9,
            "isHot":0,
            "yp":"dalian"
        }
        ,
        {
            "nm":"抚顺",
            "id":12,
            "cityId":59,
            "isHot":0,
            "yp":"fushun"
        },
        {
            "nm":"昆明",
            "id":13,
            "cityId":416,
            "isHot":0,
            "yp":"kunming"
        },
        {
            "nm":"廊坊",
            "id":14,
            "cityId":33,
            "isHot":0,
            "yp":"langfang"
        },
        {
            "nm":"牡丹江",
            "id":15,
            "cityId":88,
            "isHot":0,
            "yp":"mudanjiang"
        },
        {
            "nm":"南昌",
            "id":16,
            "cityId":134,
            "isHot":0,
            "yp":"nanchang"
        },
        {
            "nm":"攀枝花",
            "id":17,
            "cityId":239,
            "isHot":0,
            "yp":"panzhihua"
        },
        {
            "nm":"青岛",
            "id":18,
            "cityId":21,
            "isHot":1,
            "yp":"qingdao"
        },
        {
            "nm":"日照",
            "id":19,
            "cityId":153,
            "isHot":0,
            "yp":"rizhao"
        },
        {
            "nm":"太原",
            "id":20,
            "cityId":35,
            "isHot":0,
            "yp":"taiyuan"
        },
        {
            "nm":"武汉",
            "id":21,
            "cityId":16,
            "isHot":1,
            "yp":"wuhan"
        },
        {
            "nm":"晋中",
            "id":22,
            "cityId":41,
            "isHot":0,
            "yp":"jinzhong"
        },
        {
            "nm":"厦门",
            "id":23,
            "cityId":33,
            "isHot":0,
            "yp":"xiamen"
        },
        {
            "nm":"营口",
            "id":24,
            "cityId":63,
            "isHot":0,
            "yp":"yingkou"
        },
        {
            "nm":"张家界",
            "id":25,
            "cityId":198,
            "isHot":0,
            "yp":"zhangjiajie"
        }
    ]
})


// Mock.mock(/\goods\/goodsList/,"get",function(options){
//     let {limit,page} = url.parse(options.url,true).query;
//     return data.data.slice((page-1)*limit,(limit*page)-1)
// })


Mock.mock(/\goodss\/goodsList/,"get",function(options){
    return data
})