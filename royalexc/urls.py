from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.conf.urls.i18n import i18n_patterns
from royalexc import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^i18n/', include('django.conf.urls.i18n')),
]

urlpatterns += i18n_patterns(
    url((r'^$'), TemplateView.as_view(template_name="index.html"), name="home"),
    url((r'^about_company$'), TemplateView.as_view(template_name="about-us/aboutcompany.html"), name="about company"),
    url((r'^advantages$'), TemplateView.as_view(template_name="about-us/advantages.html"), name="advantages"),
    url((r'^careers$'), TemplateView.as_view(template_name="about-us/careers.html"), name="careers"),
    url((r'^contact_us$'), TemplateView.as_view(template_name="about-us/contactus.html"), name="contact us"),
    url((r'^documents$'), TemplateView.as_view(template_name="about-us/documents.html"), name="documents"),
    url((r'^regulations$'), TemplateView.as_view(template_name="about-us/regulations.html"), name="regulations"),
    url((r'^funds$'), TemplateView.as_view(template_name="about-us/funds.html"), name="funds"),
    url((r'^faq$'), TemplateView.as_view(template_name="about-us/faq.html"), name="faq"),
    url((r'^cfds-on-bonds$'), TemplateView.as_view(template_name="trading/cfds-on-bonds.html"), name="cfds on bonds"),
    url((r'^cfds-on-shares$'), TemplateView.as_view(template_name="trading/cfds-on-shares.html"), name="cfds on shares"),
    url((r'^commodities-trading$'), TemplateView.as_view(template_name="trading/commodities-trading.html"), name="commodities trading"),
    url((r'^equity-indices$'), TemplateView.as_view(template_name="trading/equity-indices.html"), name="equity indices"),
    url((r'^forex-currencies$'), TemplateView.as_view(template_name="trading/forex-currencies.html"), name="forex currencies"),
    url((r'^compare-accounts$'), TemplateView.as_view(template_name="accounts/compare-accounts.html"), name="compare accounts"),
    url((r'^demo-account$'), TemplateView.as_view(template_name="accounts/demo-account.html"), name="demo account"),
    url((r'^live-account$'), TemplateView.as_view(template_name="accounts/live-trading-account.html"), name="live account"),
    url((r'^funding-options$'), TemplateView.as_view(template_name="accounts/funding-options.html"), name="funding options"),
    url((r'^islamic-account$'), TemplateView.as_view(template_name="accounts/islamic-account.html"), name="islamic account"),
    url((r'^introducing-brokers$'), TemplateView.as_view(template_name="partners/introducing-brokers.html"), name="introducing brokers"),
    url((r'^marketing-tools$'), TemplateView.as_view(template_name="partners/marketing-tools.html"), name="marketing tools"),
    url((r'^white-label$'), TemplateView.as_view(template_name="partners/white-label-new.html"), name="white label"),
    url((r'^webtrader$'), TemplateView.as_view(template_name="platforms/webtrader.html"), name="webtrader"),
    url((r'^mt4-overview$'), TemplateView.as_view(template_name="platforms/metatrader-4-overview.html"), name="mt4 overview"),
    url((r'^mt4-android$'), TemplateView.as_view(template_name="platforms/metatrader-4-android.html"), name="mt4 android"),
    url((r'^mt4-desktop$'), TemplateView.as_view(template_name="platforms/metatrader-4-desktop.html"), name="mt4 desktop"),
    url((r'^mt4-iphone$'), TemplateView.as_view(template_name="platforms/metatrader-4-iphone.html"), name="mt4 iphone"),
    url((r'^academy$'), TemplateView.as_view(template_name="tools-education/academy.html"), name="academy"),
    url((r'^economic-calendar$'), TemplateView.as_view(template_name="tools-education/economic-calendar.html"), name="economic calendar"),
    url((r'^holiday-calendar$'), TemplateView.as_view(template_name="tools-education/holiday-calendar.html"), name="holiday calendar"),
    url((r'^market-hours$'), TemplateView.as_view(template_name="tools-education/market-hours.html"), name="marketing hours"),
    url((r'^rollover$'), TemplateView.as_view(template_name="tools-education/rollover.html"), name="rollover"),
    url((r'^trading-central$'), TemplateView.as_view(template_name="tools-education/trading-central.html"), name="trading central"),
    url((r'^success_registration$'), TemplateView.as_view(template_name="success_page.html"), name="success page"),
    url((r'^fail_registration$'), TemplateView.as_view(template_name="fail_page.html"), name="fail page"),
    url((r'^terms_and_conditions$'), views.term_cond, name="Terms and Conditions"),
    url((r'^privacy_policy$'), views.priv_pol, name="Privacy Policy"),
    url((r'^conflicts_of_interest_policy$'), views.conf_int, name="Conflicts of Interest Policy"),
    url((r'^order_execution_policy$'), views.ord_ex, name="Order Execution Policy"),
url((r'^risk_disclaimer'), views.risk_disclaimer, name="Risk Disclaimer"),

) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
