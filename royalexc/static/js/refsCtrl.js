var app = app || {};

(app.refCaptureCtrl = function () {
  jQuery(document).ready(function() {
    app.saveRefDataToCookie();
    app.pasteRefDataToForm();
  });
}).call();

app.refFormFieldNames = ['Referrer', 'Tag', 'Tag1', 'CampaignId', 'CreativeId', 'UtmCampaign', 'UtmContent', 'UtmCreative', 'UtmMedium', 'UtmSource', 'UtmTerm', 'UpgradeFromDemoAccountId'];

app.refParamNames = ['_aid', '_tag', '_tag1', '_cid', '_crtv', '_utmcampaign', '_utmcontent', '_utmcreative', '_utmmedium', '_utmsource', '_utmterm', 'UpgradeFromDemoAccountId'];


app.pasteRefDataToForm = function () {
  if (typeof jQuery.cookie('referralData') !== 'undefined'){

    var refData = JSON.parse(jQuery.cookie('referralData'));

    jQuery.each(app.refParamNames, function(index, refName)
                {
      //var formItem = jQuery('#' + refName);
      var formItem = jQuery('#' + app.refFormFieldNames[index]);
      if (formItem !== 'undefined')
      {
        jQuery.each(refData.items, function(index, pName){
          if(pName.name === refName)
          {
            formItem.val(pName.value);
          }
        });
      }
    });
  }
};

app.saveRefDataToCookie = function (){
  var currentUrl = window.location.href;

  var refParamsJSON =  { items: [] };

  var parameterCount = 0;

  jQuery.each(app.refParamNames, function( index, parameterName ) {

    var parameterValue = app.getUrlParameter(parameterName);
    if (parameterValue !== undefined)
    {
      var newItem = { name: parameterName, value: parameterValue };
      refParamsJSON.items.push(newItem);
      parameterCount ++;
    }
  });

  if(parameterCount > 0){
    var cookieValue = JSON.stringify(refParamsJSON);
    jQuery.cookie("referralData", cookieValue);
  }
};

app.getUrlParameter = function (sParam) {

  var sPageURL = window.location.search.substring(1);

  var sURLVariables = sPageURL.split('&');

  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
};