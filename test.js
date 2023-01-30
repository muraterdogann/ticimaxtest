var urunDuzeniTipi = 3;
var mobilBlokCozunurluk = 768;
var sliderZoomCozunurluk = 768;
var isHoverCartProduct = false;
var kategoriMenuAcikGetir = true;
var urunDetayZoomCozunurluk = 768;
var windowidth = document.documentElement.clientWidth;
var urunDetay_varyasyonSecili = true;
if (windowidth > 768) {
   var sepeteEkleUyariAktif = true;
} else {
   var sepeteEkleUyariAktif = false;
}
$(document).ready(function () {
   $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>');
   if ($('#divSayfalamaUst').length > 0) {
      KategoriIslemleri();
   } else if (globalModel.pageType == 'productdetail') {
      UrunDetayIslemleri();
   } else if (globalModel.pageType == 'cart' || globalModel.pageType == 'ordercomplete' || globalModel.pageType == 'payment' || globalModel.pageType == 'ordercompleted') {
      SepetEkrani();
   }
   if ($('.pageContainer').length > 0) {
      $('body').addClass('SayfaIcerik');
   }
   if ($('.magazalarContent').length > 0) {
      $('body').addClass('Magazalar');
   }
   if ($('.userDivRow').length > 0) {
      $('body').addClass('UyeGiris');
   }
   if ($('.uyeOlContainer').length > 0) {
      $('body').addClass('UyeOl');
   }
   GlobalIslemler();
   setTimeout(function () {
      $('#btnKelimeAra').val('');
      $('.newsbutton').html('<i class="fal fa-envelope"></i>');
   }, 200);
});

function GlobalIslemler() {
    $('.htop').insertBefore('.headerContent');
 
    if ($('.homeContainer').length > 0) {
       // Do nothing
    }
 
    if (!pageInitialized) {
       if (window.innerWidth > 1041) {
          $('.mycart').insertBefore('.welcome');
          $('.HeaderSiparis').insertBefore('.welcome');
       }
 
       $('#divNewsLetter').prependTo('.ebultenGelecek');
       $('.headerContent').append('<div class="SearchToggle"><span>ARA</span></div>');
       $(".searchContent").append("<div class='SearchToggle2'>X</div>");
 
       $("body").on("click", ".SearchToggle", function () {
          $(".SearchToggle, .SearchToggle2").addClass("active");
          $(".searchContent").addClass("active");
       });
 
       $(".SearchToggle2").on('click', function () {
          $(".SearchToggle, .SearchToggle2").removeClass("active");
          $(".searchContent").removeClass("active");
       });
 
       $(".SearchToggle").on('click', function () {
          setTimeout(function () {
             $('#txtbxArama').focus();
          }, 200);
       });
    }
 
    if ($(".menuIcerikAlan .storiesWrapper.stories").length > 0) {
       $(".menuIcerikAlan #instaStories").appendTo(".headerContent");
    }
 
    setTimeout(function () {
       if (window.innerWidth < 1042) {
          $("#header .storiesWrapper.stories").insertAfter("#header .welcomeOpen");
       }
    }, 1000);
 }
 

function KategoriIslemleri() {
   $("body").addClass("CategoryBody");
   $('.categorydesign').insertBefore('.leftBlock');
   $('.CatTitle').prependTo('.middleTopBlock');
}

function BedenTablosu() {
   $('.kutuluvaryasyon .left_line').append('<div class="bedenT"><a class="fancybox bedenTablosu" href="#bedenTablosu">Beden Tablosu</a></div>');
   $(".PriceList").append("<div style='display:none;' id='bedenTablosu'><img class='img-responsive' src='https://static.ticimax.cloud/11820/Uploads/EditorUploads/BedenTablosu.jpg' /></div>");
   $(".fancybox").fancybox();
}

function UrunDetayIslemleri() {
   $("body").addClass("ProductBody");
   if (productDetailModel.totalStockAmount < 1) {
      $('.RightDetail').addClass('StokYok');
   }
   if (!pageInitialized) {
      $('.ProductDetailMain').prepend('<div class="TopDet"></div>');
      $('.ProductDetail > .categoryTitle').prependTo('#divIcerik');
      $('.leftImage').appendTo('.TopDet');
      $('.RightDetail').appendTo('.TopDet');
      $('.RightDetail').prepend('<div class="TopList"></div>');
      $('.PriceList').appendTo('.ProductName');
      $('.ProductName').prependTo('.TopList');
      $('.TopList').after('<div class="MiddleList"></div>');
      $('#divSatinAl').appendTo('.MiddleList');
      $('#divUrunEkSecenek').prependTo('.MiddleList');
      $('#divStokYok').prependTo('.MiddleList');
      $('.MiddleList').after('<div class="BottomList"></div>');
      $('#divEkstraBilgiler').appendTo('.BottomList');
      $('.urunOzellik').appendTo('.BottomList');
      $('.ProductIcon').appendTo('.BottomList');
      $('.ProductIcon2 ').appendTo('.BottomList');
      $('.product_social_icon_wrapper').appendTo('.BottomList');
      $('.markaresmi').insertBefore('.ProductName');
      $('#divOnyazi').insertAfter('.ProductName');
      $('#divMagazaStok').insertBefore('.basketBtn');
      $('#divTahminiTeslimatSuresi').insertAfter('.ProductName');
      $('#divIndirimOrani').insertAfter('.ProductName');
      $('#divParaPuan').insertAfter('.ProductName');
      $('#divToplamStokAdedi').insertAfter('.ProductName');
      $('#divUrunStokAdedi').insertAfter('.ProductName');
      $('#divTedarikci').insertAfter('.ProductName');
      $('#divBarkod').insertAfter('.ProductName');
      $('.puanVer').insertAfter('.ProductName');
      $('#divMarka').insertAfter('.ProductName');
      $('#divOzelAlan1').insertAfter('.ProductName');
      $('#divUrunKodu').insertAfter('.ProductName');
      $('.riSingle .riUp').html('<i class="far fa-plus"></i>');
      $('.riSingle .riDown').html('<i class="far fa-minus"></i>');
      $('.buyfast').insertAfter('.basketBtn');
      $('#divAdetCombo').insertBefore('.basketBtn');
      $('#divTaksitAciklama').insertAfter('#pnlFiyatlar');
      $('.UWhatsApp').insertAfter('.product_social_icon_wrapper li:last-child');
      $('#divKombinSatinAl').insertAfter('.buyfast');
      $('.UFavorilerimeEkle').prependTo('.leftImage');
      $("#BenzerUrunDiv").appendTo(".ticiBottomBlockContent");
      $("#IlgiliUrunDiv").insertBefore("#divUrunEkSecenek");
      $("#IlgiliKombinlerDiv").appendTo(".ticiBottomBlockContent");
      $(".UGelinceHaberVer").insertBefore(".urunOzellik");
      $(".basketBtn,.UFavorilerimeEkle a").on('click', function () {
         if ($("#hddnUrunID").val() == "0") {
            $('html,body').animate({
               scrollTop: $('#divUrunEkSecenek').offset().top - 110
            }, 'slow');
         }
      });
      if (windowidth < 768) {
         $(".RightDetail").append("<div class='UDFixed'></div>");
         $(".PriceList").prependTo(".UDFixed");
         $(".basketBtn").appendTo(".UDFixed");
         $(".product_social_icon_wrapper").prependTo(".BottomList");
      }
      setTimeout(function () {
         BedenTablosu();
      }, 500);
   }
}

function ElementFix() {
   var s = document.createElement("script");
   s.type = "text/javascript";
   s.src = "https://static.ticimax.cloud/11820/CustomCss/ticimax/jquery-scrolltofixed-min.js";
   $("head").append(s);
   var summaries = $('.navigation');
   summaries.each(function (i) {
      var summary = $(summaries[i]);
      var next = summaries[i + 1];
      summary.scrollToFixed({
         limit: function () {
            var limit = 0;
            if (next) {
               limit = $(next).offset().top - $(this).outerHeight(true) - 10;
            } else {}
            return limit;
         },
         zIndex: 999,
         removeOffsets: true,
      });
   });
}

function ElementFix2() {
   var summaries = $('.RightDetail');
   summaries.each(function (i) {
      var summary = $(summaries[i]);
      var next = summaries[i + 1];
      summary.scrollToFixed({
         limit: function () {
            var limit = 0;
            if (next) {
               limit = $(next).offset().top - $(this).outerHeight(true) - 10;
            } else {
               limit = $('.ticiBottomBlockContent').offset().top - $(this).outerHeight(true) - 0.1;
            }
            return limit;
         },
         zIndex: 999,
         removeOffsets: true,
      });
   });
}

function topMenuCallback() {
   if ($('#divSayfalamaUst').length > 0) {}
   $('.navigation .navUl > li:last-child > a').attr('href', 'javascript:void(0)');
   $(".navUl li").each(function () {
      if ($(this).find("ul").length > 0) {
         $(this).addClass("ulVar");
         $(this).append('<span></span>')
      }
   });
   $("body").on("click", ".HeaderMenu2.navUl > .ulVar > span ", function () {
      $('.HeaderMenu2.navUl > .ulVar').removeClass("active");
      $(this).find('active').removeClass("active");
      $(this).closest('.ulVar').addClass("active");
   });
   $("body").on("click", ".HeaderMenu2.navUl > .ulVar.active > span ", function () {
      $(this).closest('.ulVar').removeClass("active");
   });
   $("body").on("click", ".HeaderMenu2.navUl > .ulVar > ul > li > span ", function () {
      $(this).closest('.ulVar').toggleClass("active");
   });
   $("body").on("click", ".HeaderYardim", function () {
      $('.navigation .navUl > li:last-child').toggleClass("active");
   });
   if (!pageInitialized) {
      $('body').on('mouseenter', '.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar', function () {});
      $('body').on('mouseleave', '.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar', function () {});
   }
   if (windowidth < 1042) {
      mobileMenu();
      $('#lang_flag_container').appendTo('.menuUstBolum');
   }
}

function blockCompleteCallback() {
   if (globalModel.pageType == 'homepage') {
      $('body').addClass('HomeBody');
   }
   if ($('#divSayfalamaUst').length > 0) {}
   if (globalModel.pageType == 'productdetail') {
      if (!pageInitialized) {
         $('#linkOncekiSayfa').appendTo('ul.breadcrumb');
         if (windowidth < 768) {
            $('#linkOncekiSayfa').appendTo('.leftImage');
         }
         var cList = $('.urunTab ul li');
         var cDiv = $('.urunDetayPanel');
         for (var i = 0; i <= cList.length; i++) {
            for (var i = 0; i <= cDiv.length; i++) {
               $(cDiv[i]).appendTo(cList[i]);
            }
         }
         $(".urunDetayPanel").hide();
         $(".urunTab").removeClass().addClass("webTab");
         $(".webTab > ul > li").removeClass("active");
      }
      $('.webTab>ul>li.TabOzellikler').addClass('active');
      $('.webTab >ul>li>a').on('click', function () {
         if ($(this).parent().hasClass('active')) {
            $('.webTab >ul>li>a').parent().removeClass('active');
         } else {
            $('.webTab >ul>li>a').parent().removeClass('active');
            $(this).parent().addClass('active');
         }
      });
      setTimeout(function () {
         $("#liTabOzellikler a").trigger('click');
      }, 200);
   }
}

function urunListCallback() {
   Sepetteindirim();
   if (globalBlokModel == 1) {
      if (urunDuzeniTipi == 0) urunDuzeniTipi = 3;
      $('.leftBlock').removeClass().addClass('leftBlock LeftMiddle');
      $('.centerCount').removeClass().addClass('centerCount LeftMiddle');
   } else if (globalBlokModel == 2) {
      if (urunDuzeniTipi == 0) urunDuzeniTipi = 2;
      $('.leftBlock').removeClass().addClass("leftBlock LeftMiddleRight");
      $('.rightBlock').removeClass().addClass("rightBlock LeftMiddleRight");
      $('.centerCount').removeClass().addClass("centerCount LeftMiddleRight");
   } else if (globalBlokModel == 3) {
      if (urunDuzeniTipi == 0) urunDuzeniTipi = 3;
      $('.rightBlock').removeClass().addClass("rightBlock MiddleRight");
      $('.centerCount').removeClass().addClass("centerCount MiddleRight");
   } else if (globalBlokModel == 4) {
      if (urunDuzeniTipi == 0) urunDuzeniTipi = 4;
      $('.centerCount').removeClass().addClass("centerCount Middle");
   }
   if ($('.blockSelect').length > 0) {
      $('body').on('click', '.blockSelect .sort_hrz', function () {
         urunDuzeniTipi = 1;
         urunDuzeni(urunDuzeniTipi);
      });
      $('body').on('click', '.blockSelect .sort_2', function () {
         urunDuzeniTipi = 2;
         urunDuzeni(urunDuzeniTipi);
      });
      $('body').on('click', '.blockSelect .sort_3', function () {
         urunDuzeniTipi = 3;
         urunDuzeni(urunDuzeniTipi);
      });
      $('body').on('click', '.blockSelect .sort_4', function () {
         urunDuzeniTipi = 4;
         urunDuzeni(urunDuzeniTipi);
      });
      $('body').on('click', '.blockSelect .sort_5', function () {
         urunDuzeniTipi = 5;
         urunDuzeni(urunDuzeniTipi);
      });
   }
   $('.sliderBannerContainer:not(.NoSlider) .jCarouselLite ul').each(function () {
      if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
         $(this).owlCarousel({
            lazyLoad: true,
            autoplay: false,
            loop: false,
            rewind: true,
            navClass: ['ProductListprev', 'ProductListnext'],
            margin: 20,
            nav: true,
            responsive: {
               0: {
                  items: 2,
                  margin: 5
               },
               768: {
                  items: 3
               },
               1023: {
                  items: 3
               },
               1042: {
                  items: 4
               },
               1200: {
                  items: 4
               }
            }
         });
   });
   $('.ticiBottomBlockContent .detaySliderContainer .jCarouselLite ul').each(function () {
      if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
         $(this).owlCarousel({
            lazyLoad: true,
            autoplay: false,
            loop: false,
            rewind: true,
            navClass: ['ProductListprev', 'ProductListnext'],
            margin: 30,
            nav: true,
            responsive: {
               0: {
                  items: 4,
                  margin: 5,
                  autoplay: true,
                  loop: true,
                  autoWidth: true
               },
               768: {
                  items: 3
               },
               1023: {
                  items: 3
               },
               1042: {
                  items: 4
               },
               1200: {
                  items: 4
               }
            }
         });
   });
   urunDuzeni(urunDuzeniTipi);
   if (globalModel.pageType == 'homepage') {}
   if ($('#divSayfalamaUst').length > 0) {
      setTimeout(function () {
         if ($(".FiltreToggle").length == 0) {
            $(".blockSelect").before("<div class='FiltreToggle'>+ FİLTRELE</div>");
         }
         if ($(".FiltreClose").length == 0) {
            $(".filterBlock").prepend("<div class='FiltreClose'><i class='fal fa-close'></i></div>");
         }
      }, 1000);
      $("body").on("click", ".FiltreToggle", function () {
         $(".filterBlock").addClass("active");
      });
      $("body").on("click", ".FiltreClose", function () {
         $(".filterBlock").removeClass("active");
      });
   }
   if (globalModel.pageType == 'productdetail') {
      if ($('#divSatinAl').css('display') == 'none') {
         $('.RightDetail').addClass('StokYok');
      }
   }
   InitTimers();
   $(".productItem").find("video").parent().addClass("Videolu");
   $(".productItem").find(".TukendiIco").parent().addClass("StokYok");
   $(".productPrice").find(".regularPrice").parent().addClass("IndirimVar");
   $(".sliderBannerContainer .productItem").find("video").parent().addClass("Videolu");
}

function urunDuzeni(tip) {
   if ($('#divSayfalamaUst').length > 0) {
      if ($('.blockSelect .sort_5').length == 0) {
         $('.blockSelect .sort_4').after('<a href="javascript:;" class="sort_5"><i class="fas fa-th"></i></a>');
      }
      if ($('.blockSelect .sort_2').length == 0) {
         $('.blockSelect .sort_3').before('<a href="javascript:;" class="sort_2"><i class="fas fa-th-large"></i></a>');
      }
      if ($('.brandlistselection select').length > 0) {
         $('#divSayfalamaUst').addClass('Slct');
      }
      $('.sort_hrz').removeClass("Active");
      $('.sort_2').removeClass("Active");
      $('.sort_3').removeClass("Active");
      $('.sort_4').removeClass("Active");
      $('.sort_5').removeClass("Active");
      if (tip == 1) {
         $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_hrz');
         $(".ItemOrj").removeClass().addClass("ItemOrj col-12");
         $('.blockSelect .sort_hrz').addClass("Active");
         lazyLoad();
      } else if (tip == 2) {
         $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_2');
         $(".ItemOrj").removeClass().addClass("ItemOrj col-6");
         $('.blockSelect .sort_2').addClass("Active");
         lazyLoad();
      } else if (tip == 3) {
         $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_3');
         $(".ItemOrj").removeClass().addClass("ItemOrj col-4");
         $('.blockSelect .sort_3').addClass("Active");
         lazyLoad();
      } else if (tip == 4) {
         $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_4');
         $(".ItemOrj").removeClass().addClass("ItemOrj col-3");
         $('.blockSelect .sort_4').addClass("Active");
         lazyLoad();
      } else if (tip == 5) {
         $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_5');
         $(".ItemOrj").removeClass().addClass("ItemOrj col-5li");
         $('.blockSelect .sort_5').addClass("Active");
         lazyLoad();
      } else if (tip == 6) {
         $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_6');
         $(".ItemOrj").removeClass().addClass("ItemOrj col-2");
         lazyLoad();
      }
      if (windowidth < 1042) {
         if ($('.FiltreUst').length == 0) {
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="sortingClick(1000)" class="filterOrderInStock">' + translateIt("Urunler_Stoktakiler") + '</a></div>');
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="FiltreUst"><div class="closeFilt"><i class="fal fa-times"></i></div><span>' + translateIt("UrunFiltreleme_Filtreleme") + '</span><a onclick="clearAllFilters()"><i class="fal fa-trash"></i></a></div>');
            if ($('.moreNum').length == 0) {
               $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').find('.panel-heading').append('<div class="moreNum"></div>');
            }
            $('.mobilFilterBtn').on('click', function (event) {
               $('.mobilaf').addClass('acik');
               $('#divSayfalamaUst .filterBlock').addClass('active');
            });
            $('.closeFilt').on('click', function (event) {
               $('.mobilaf').removeClass('acik');
               $('#divSayfalamaUst .filterBlock').removeClass('active');
            });
         }
         $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
            if ($(this).find('li').hasClass('selected')) {
               var numlen = $(this).find('li.selected').length;
               $(this).addClass('more');
               $(this).find('.moreNum').html(numlen);
            } else {
               $(this).removeClass('more');
               $(this).find('.moreNum').html('');
            }
         });
         $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
            if ($('#divSayfalamaUst .category-vertical-filters.top-filters .panel').hasClass('more')) {
               $('.FiltreUst a').addClass('active');
               return false;
            } else {
               $('.FiltreUst a').removeClass('active');
            }
         });
         if ($('.sortingContent .filterOrderInStock').hasClass('selected')) {
            $('.tukgo .filterOrderInStock').addClass('selected');
         } else {
            $('.tukgo .filterOrderInStock').removeClass('selected');
         }
         if ($('.sortingContent .sortingButton').length > 0) {
            if ($('.sortingContent .sortingButton > a[onclick="sortingClick(1000)"]').hasClass('selected')) {
               $('.tukgo .filterOrderInStock').addClass('selected');
            } else {
               $('.tukgo .filterOrderInStock').removeClass('selected');
            }
         }
      }
   }
   if (globalModel.pageType == 'productdetail') {
      if ($('#divUrunKodu span').length == 0) {
         $('#divUrunKodu').prepend('<span>' + translateIt("Global_StokKodu") + '</span>');
      }
   }
}

function ekSecenekListesiCallBack() {
   if (globalModel.pageType == 'productdetail') {
      if ($('#divUrunKodu span').length == 0) {
         $('#divUrunKodu').prepend('<span>' + translateIt("Global_StokKodu") + '</span>');
      }
   }
}

function mobileMenu() {
   var menuKopya = $('.navigation').html();
   $('.navigation').remove();
   $('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="menuBack"><i class="far fa-bars"></i><span>Menu</span></div><div class="CloseBtnMenu"><i class="far fa-times"></i></div></div><div class="menuIcerikAlan">' + menuKopya + '</div></div>');
   $(".welcome").prependTo(".menuUstBolum");
   if (windowidth < 768) {
      $('.headerContent').append('<div class="mobilMenuAcButton"><span>Menu</span><i class="far fa-bars"></i></div><div class="searchClick"><span>ARA</span></div><div class="welcomeOpen"><i class="fal fa-user"></i></div><div class="mycartClick"><i class="fal fa-shopping-bag" ></i></div>');
   }
   if (windowidth > 767) {
      $('#logo').before('<div class="mobilMenuAcButton"><span>Menu</span><i class="far fa-bars"></i></div>');
   }
   if ($('.HeaderMenu2').length > 0) {
      $('.mobilMenu .HeaderMenu2 > li > ul').closest('li').append('<div class="ResimsizDown"><i class="fal fa-angle-right"></i></div>');
      $('.mobilMenu .HeaderMenu2 > li > ul li ul').closest('li').append('<div class="ResimsizDown2"><i class="fal fa-angle-right"></i></div>');
      $("body").on("click", ".mobilMenu .navUl>li > .ResimsizDown", function () {
         $('.mobilMenu .navUl>li').removeClass("active");
         $(this).find('active').removeClass("active");
         $(this).closest('.ulVar').addClass("active");
      });
      $("body").on("click", ".mobilMenu .navUl>li.active > .ResimsizDown ", function () {
         $(this).closest('.ulVar').removeClass("active");
      });
      $('.ResimsizDown2').on('click', function (event) {
         if ($(this).find('.fal').hasClass('fa-angle-right')) {
            $(this).closest('li').toggleClass('active');
            $(this).closest('ul').addClass('over');
         } else {
            $(this).closest('li').removeClass('active');
            $(this).closest('ul').removeClass('over');
         }
      });
      $('.ResimsizDown').each(function (index, el) {
         var Down1 = $(this).parent('li').find('>a').text();
         $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack"><i class="fal fa-long-arrow-left"></i></div> <span>' + Down1 + '</span></span>');
      });
      $('.ResimsizDown2').each(function (index, el) {
         var Down2 = $(this).parent('li').find('>a').text();
         $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack2"><i class="fal fa-long-arrow-left"></i></div> <span>' + Down2 + '</span></span>');
      });
      $('.NoiBack2').on('click', function (event) {
         $(this).parent().parent().removeClass('active');
         $(this).closest('.over').removeClass('over');
         $('.mobilMenu .navUl > li > ul').animate({
            scrollTop: 0
         }, 100);
         $('.menuIcerikAlan').animate({
            scrollTop: 0
         }, 100);
      });
      $('.NoiBack').on('click', function (event) {
         $('.mobilMenu .navUl > li > ul').removeClass('active');
         $('.menuIcerikAlan').animate({
            scrollTop: 0
         }, 100);
      });
   }
   $('.mobilMenu').after('<div class="mobilaf"></div>');
   if (windowidth < 768) {
      $('#divIcerik').on('touchend', function () {
         $('.welcome').removeClass('active');
         $('.searchContent').removeClass('active');
      });
      $('.CartProduct').insertAfter('.mobilMenu');
      if ($('.CartProduct span').hasClass('spanustSepetteUrunYok')) {
         $('.CartProduct').addClass('SepetBos');
      }
      if ($('.homeHeader').length > 0) {
         $('body').addClass('homeBody');
      }
      $('.searchClick').on('click', function (event) {
         $('.searchContent').toggleClass('active');
         $('.mobilMenu').removeClass('acik');
         $('.altMenu').removeClass('active');
         $('.ResimliMenu1AltUl').removeClass('active');
         $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
         $('.mobilMenu .navUl ul').removeClass('active');
         $('.mobilMenu .lfMenuAltContent').removeClass('active');
         $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>');
         $('.CartProduct').removeClass('animated');
         $('.welcome').removeClass('active');
         $('#lang_flag_container').removeClass('selector');
         $('#txtbxArama').focus();
      });
      $('.welcomeOpen').on('click', function () {
         $('.welcome').toggleClass('active');
         $('.mobilMenu').removeClass('acik');
         $('.altMenu').removeClass('active');
         $('.ResimliMenu1AltUl').removeClass('active');
         $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
         $('.mobilMenu .navUl ul').removeClass('active');
         $('.mobilMenu .lfMenuAltContent').removeClass('active');
         $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>');
         $('.CartProduct').removeClass('animated');
         $('.searchContent').removeClass('active');
         $('#lang_flag_container').removeClass('selector');
      });
   }
   $('.menuBack').on('click', function () {
      $('.ResimliMenu1AltUl').removeClass('active');
      $('.altMenu').removeClass('active');
      $('.navUl > li ul').removeClass('active');
   });
   $('.mobilMenuAcButton').on('click', function (event) {
      $('body').addClass('overflow transform');
      $('.mobilMenu').addClass('acik');
      $('.mobilaf').addClass('acik').removeAttr('style');;
      $('.CartProduct').removeClass('animated');
      $('.welcome').removeClass('active');
      $('.searchContent').removeClass('active');
      $('#lang_flag_container').removeClass('selector');
   });
   $("body").on("click", ".HeadMenu > a", function () {
      $('body').addClass('overflow transform');
      $('.mobilMenu').addClass('acik');
      $('.mobilaf').addClass('acik').removeAttr('style');;
      $('.CartProduct').removeClass('animated');
      $('.welcome').removeClass('active');
      $('.searchContent').removeClass('active');
      $('#lang_flag_container').removeClass('selector');
   });
   $('.mobilaf,.CloseBtnMenu').on('click', function (event) {
      $('body').removeClass('overflow transform');
      $('.mobilMenu').removeClass('acik');
      $('.altMenu').removeClass('active');
      $('.ResimliMenu1AltUl').removeClass('active');
      $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
      $('.mobilMenu .navUl ul').removeClass('active');
      $('.mobilMenu .lfMenuAltContent').removeClass('active');
      $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>');
      $('.mobilaf').removeClass('acik').removeAttr('style');
      $('.searchContent').removeClass('active');
      $('.welcome').removeClass('active');
      $('.CartProduct').removeClass('animated');
      $('#lang_flag_container').removeClass('selector');
      $('body #divSayfalamaUst .filterBlock').removeClass('active');
   });
   $("body").on("click", ".HeadSearch > a", function () {
      $(".searchContent").toggleClass("active");
   });
   $('body').append('<div class="bottomHead"> <ul> <li class="HeadSearch"> <a href="javascript:void(0)"><i class="fal fa-search"></i><span>Ara</span></a> </li> <li class="homeC"> <a href="/"><i class="fal fa-home"></i><span>' + translateIt("GlobalMasterPage_Anasayfa") + '</span></a> </li> <li class="HeadMenu"> <a href="javascript:void(0)"><i class="far fa-bars"></i><span>Menu</span><div class="favNum"></div></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-user"></i><span>' + translateIt("GlobalMasterPage_MobilUyeGirisi") + '</span></a> </li><li class="cartC"> <a href="/sepetim.aspx"><i class="fal fa-shopping-cart"></i><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></a> </li></ul> </div>');
   if (siteSettings.isAuthenticated == true) {
      $('.welcC a').attr('href', '/hesabim.aspx');
      $('.favoC a').attr('href', '/Hesabim.aspx/#/Favorilerim');
      $('.welcC span').html(translateIt("GlobalMasterPage_MobilHesabim"));
   }
   $(".mobilMenu .navUl>li:last-child").on('click', function () {
      $('.menuIcerikAlan').animate({
         scrollTop: $('.mobilMenu .navUl').offset().top + 150
      }, 'slow');
   });
}

function SepetEkrani() {
   $('.mycart').addClass('more');
   $('.navigation .navUl').wrapAll('<div></div>');
   $('.Mic').insertAfter('.navUl');
   setTimeout(function () {
      var wle = $('.welcome').html();
      $('.welcome').html('');
      $('.welcome').append('<div>' + wle + '</div>');
   }, 1500);
   var BasketPageHeigth = $(".BasketPage").height();
   $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll > BasketPageHeigth - 150) {
         $(".BasketAccount").addClass("BasketNoFixed");
      } else {
         $(".BasketNoFixed").removeClass("BasketNoFixed");
      }
   });
}

function HesabimTakip() {
   $('body').addClass('HesabimTakip');
}

function Iletisimaspx() {
   $('body').addClass('Iletisimaspx');
   var uyead = globalModel.member.memberName;
   var uyemail = globalModel.member.memberEMail;
   $('#mainHolder_txtbxAdSoyad').attr('value', uyead);
   $('#mainHolder_txtbxMail').attr('value', uyemail);
   $('.iletisimLeft,.iletisimRight').wrapAll('<div class="AdBan"></div>');
   $('#itetisimhtml').insertBefore('.AdBan');
   $('.iletisimLeftAdres').insertAfter('.iletisimLeftFirmaAdi');
}

function sepetBindRefresh(res) {
   if (typeof res.cart.products != 'undefined') {
      if (res.cart.products.length > 0) {
         $('.mycart').addClass('more');
         $('.CartProduct').addClass('more');
         $('.SepetBlock').addClass('more');
         $('.headerOrderBtn').text(translateIt('SiparisTamamla_Baslik'));
      } else {
         $('.mycart').removeClass('more');
         $('.CartProduct').removeClass('more');
         $('.SepetBlock').removeClass('more');
      }
   }
   if (windowidth < 768) {
      $('.mycart > a').removeAttr('href');
      if ($('.SepetUst').length == 0) {
         $('.CartProduct').prepend('<div class="SepetUst"><div class="seClose"><i class="fal fa-times"></i></div><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></div>');
      }
   }
}
$(document).on('click', '.mycartClick,.sepetUrunSayisi', function () {
   $('.mobilMenu').removeClass('acik');
   $('body').addClass('overflow transform');
   $('.CartProduct').addClass('animated');
   $('.mobilMenu').removeClass('acik');
   $('.altMenu').removeClass('active');
   $('.ResimliMenu1AltUl').removeClass('active');
   $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
   $('.mobilMenu .navUl ul').removeClass('active');
   $('.mobilMenu .lfMenuAltContent').removeClass('active');
   $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>');
   $('.searchContent').removeClass('active');
   $('.welcome').removeClass('active');
   $('#lang_flag_container').removeClass('selector');
});
$(document).on('click', '.seClose', function () {
   $('.CartProduct').removeClass('animated');
   $('body').removeClass('overflow transform');
});
$(window).on('load', function () {
   if ($(".hesabimBolumuTutucu").length > 0) {
      HesabimTakip();
      setTimeout(function () {
         IadeBakiyeAutoSelect();
      }, 250)
   }
   if ($(".iletisimContent").length > 0) {
      Iletisimaspx();
   }
});
$(document).on('change', '.return-product-js', function () {
   secili = $(this).parents(".siparisUrun")
   let select = $(secili).find('select');
   $(select).find('option[value=1068]').attr('selected', 'selected');
   $(select).val("1068");
   $(select).trigger('change');
});

function AddToCartCallback() {
   if (windowidth < 768) {
      $('.mycartClick').trigger('click');
      setTimeout(function () {
         $('.mobilaf').trigger('click');
      }, 3500)
   }
}

function Sepetteindirim() {
   $('.productIcon').find('.ozelAlan4').closest('.productItem').addClass('Indirim1')
   if (IndirimOrani > 0) {
      $('.productItem.Indirim1').each(function (item) {
         $('.productItem').css('padding-bottom', '35px');
         $('.boxBedenlerContent').css('bottom', '155px');
         var price = $(this).find('.productDetail .productPrice .discountPrice span:first').text().replace(/^\s+|\s+$/g, '').trim().replace(globalModel.currencySymbol, "");
         if (globalModel.currency == "try") {
            price = price.replace(/\s/g, '').replace('.', '').replace(',', '.');
         } else {
            price = price.replace(',', '.');
         }
         var new_price = globalModel.currencySymbol + (price * IndirimOrani).toFixed(2).replace('.', ',');
         if ($(this).find('.KatSepetFiyat').length == 0) {
            $(this).append('<div class="KatSepetFiyat" style="float:left;clear:left;">' + sepettekiFiyat + '<span>' + new_price + '</span></div>');
         }
      });
      if ($('#divOzelAlan4').length > 0) {
         var price2 = $('.IndirimliFiyatContent .indirimliFiyat .spanFiyat,#divIndirimsizFiyat .right_line .spanFiyat').text().replace(/^\s+|\s+$/g, '').trim().replace(globalModel.currencySymbol, "");
         if (globalModel.currency == "try") {
            price2 = price2.replace(/\s/g, '').replace('.', '').replace(',', '.');
         } else {
            price2 = price2.replace(',', '.');
         }
         var value2 = parseFloat(price2);
         var new_price2 = globalModel.currencySymbol + (value2 * IndirimOrani).toFixed(2).replace('.', ',');
         if ($('.sPric').length == 0) {
            $('.RightDetail').addClass('SpricV');
            $('#divUrunEkSecenek').addClass('SpricV');
            $('.PriceList').after('<div class="sPric"><span>' + sepettekiFiyat + '</span>' + new_price2 + '</div>');
         }
      }
   }
}
