Handlebars.registerHelper('orderedList', function (context, options) {
    var ret = "<ol>";

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + "<li>" + options.fn(context[i]) + "</li>";
    }

    return ret + "</ol>";
});

Handlebars.registerHelper('formatCurrency', function(value) {
    return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
});

Handlebars.getTemplate = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url: '../../Scripts/Applications/Court/csearch_' + name + '.handlebars.html',
            success: function (data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};
