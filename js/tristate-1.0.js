$('body').on('click', '.tristates , .tristateLabel', triStateaction);
function triStateaction() {
    var topPos = $(this).attr("data-tristatepos")
    var parent = $(this).parent().parent();
    //debugger;
    $(parent).find("#tristateSlider").animate({ top: topPos });
    $(parent).find(".tristateLabel").removeClass("labelSelected");
    $(parent).find(".tristateLabel[data-tristatepos='" + topPos + "']").addClass("labelSelected")

    switch (topPos) {
        case "0":
            if (typeof (tristateOFF) == "function")
                tristateOFF()
            break;
        case "40":
            if (typeof (tristateInter) == "function")
                tristateInter()
            break;
        case "80":
            if (typeof (tristateON) == "function")
                tristateON()
            break;
    }
}


var triStatedefaults = {
    OFF: 'OFF',
    Intermediate: 'Intemediate',
    ON: 'ON',
    Background: '#4f4b4b',
    SliderColor: 'rgba(254, 229, 0, 1)',
    Initial: 'Intermediate',
    OFFColor: 'rgba(229, 65, 53, 1)',
    IntermediateColor: 'rgba(145, 17, 126, 1)',
    ONColor: 'rgba(55, 140, 37, 1)'
}
$(document).ready(function () {
    $('div').init.prototype.tristate = function (options) {
        console.log($(this))
        options = $.extend(triStatedefaults, options)
        var Labelwrapper = document.createElement("div")
        var label1 = document.createElement("div")
        var label2 = document.createElement("div")
        var label3 = document.createElement("div")

        var SliderWrapper = document.createElement("div")
        var state1 = document.createElement("div")
        var state2 = document.createElement("div")
        var state3 = document.createElement("div")
        var slider = document.createElement("div")

        var clear = document.createElement("div")

        $(Labelwrapper).attr("id", "tristateLabelWrapper")

        $(label1).attr({ "class": "tristateLabel height", "id": "tristateLabel0", "data-tristatepos": "0" })
        $(label1).text(options.OFF)

        $(label2).attr({ "class": "tristateLabel height", "id": "tristateLabel1", "data-tristatepos": "40" })
        $(label2).text(options.Intermediate)

        $(label3).attr({ "class": "tristateLabel height", "id": "tristateLabel2", "data-tristatepos": "80" })
        $(label3).text(options.ON)
        var minwidth = Math.max(options.OFF.length, options.Intermediate.length, options.ON.length) * 8 + 4;
        $(label3).css("min-width", minwidth)

        $(SliderWrapper).attr("id", "tristateSliderWrapper")
        $(SliderWrapper).css("background", options.background)

        $(state1).attr({ "class": "tristates height", "id": "triState0", "data-tristatepos": "0" })
        $(state1).css({ "background": options.OFFColor })

        $(state2).attr({ "class": "tristates height", "id": "triState1", "data-tristatepos": "40" })
        $(state2).css({ "background": options.IntermediateColor })

        $(state3).attr({ "class": "tristates height", "id": "triState2", "data-tristatepos": "80" })
        $(state3).css({ "background": options.ONColor })

        $(slider).attr({ "id": "tristateSlider", "class": "height" })
        $(slider).append('<span class="glyphicon glyphicon-star"></span>')
        switch (options.Initial.toLowerCase()) {
            case 'off':
                $(slider).css({ "background": options.SliderColor, "top": "0px" })
                $(label1).addClass("labelSelected")
                break;
            case 'intermediate':
                $(slider).css({ "background": options.SliderColor, "top": "40px" })
                $(label2).addClass("labelSelected")
                break;
            case 'on':
                $(slider).css({ "background": options.SliderColor, "top": "80px" })
                $(label3).addClass("labelSelected")
                break;
        }
        $(clear).addClass("tristateClear")

        Labelwrapper.appendChild(label1)
        Labelwrapper.appendChild(label2)
        Labelwrapper.appendChild(label3)

        SliderWrapper.appendChild(state1)
        SliderWrapper.appendChild(state2)
        SliderWrapper.appendChild(state3)
        SliderWrapper.appendChild(slider)

        var tristatebox = document.createElement("div")
        tristatebox.appendChild(Labelwrapper)
        tristatebox.appendChild(SliderWrapper)
        tristatebox.appendChild(clear)

        $(this).html("")
        $(this).append($(tristatebox).html())
    }
})

