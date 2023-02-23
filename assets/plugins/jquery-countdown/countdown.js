$(function () {
  var austDay = new Date("march 21, 2023");
  $("#launch_date").countdown({
    until: austDay,
    layout:
      '<div class="row row-cols-4"><ul class="countdown"><div class="col"><li><span class="number">{dn}</span><br/><span class="time">{dl}</span></li><div class="col"></div><li><span class="number">{hn}</span><br/><span class="time">{hl}</span></li><div class="col"></div><li><span class="number">{mn}</span><br/><span class="time">{ml}</span></li><div class="col"></div><li><span class="number">{sn}</span><br/><span class="time">{sl}</span></li></div></ul></div>',
  });
  $("#year").text(austDay.getFullYear());
});
