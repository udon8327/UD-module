$(function() {

  //datatable
  $("#table").DataTable({
    "oLanguage":{"sUrl":"plugins/datatable/i18n/Chinese-traditional.json"}, //中文化
    "bPaginate": true, //換頁
    "searching": true, //搜尋
    "info":	true, //資訊
  });

});