//try {
    $("<link>").attr({href: "https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/res/site/waifu/waifu.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: 'https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/res/site/waifu/waifu-tips.min.js',dataType:"script", cache: true, async: false});
    $.ajax({url: 'https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/res/site/waifu/live2d.min.js',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
    live2d_settings['modelId'] = 2;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 60;         // 默认材质 ID
    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
    live2d_settings['waifuSize'] = '300x267';        // 看板娘大小
    live2d_settings['waifuTipsSize'] = '285x75';    // 提示框大小
    live2d_settings['waifuFontSize'] = '15px';       // 提示框字体
    live2d_settings['waifuToolFont'] = '18px';       // 工具栏字体
    live2d_settings['waifuToolLine'] = '25px';       // 工具栏行高
    live2d_settings['waifuToolTop'] = '-30px';       // 工具栏顶部边距
    live2d_settings['waifuEdgeSide'] = 'right:30';
    live2d_settings['waifuDraggable'] = 'axis-x';    // 拖拽样式
    live2d_settings['canTurnToAboutPage'] = false;
    live2d_settings['canTakeScreenshot'] = false;
    live2d_settings['homePageUrl'] = '<%- config.url %>';
    /* 在 initModel 前添加 */
    initModel('https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/res/site/waifu/waifu-tips.json');
//} catch(err) { console.log('[Error] JQuery is not defined.') }
