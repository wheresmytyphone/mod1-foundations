var coneDisplay = $('.flavorbox')
var flavorDisplay = $('input:checked')
var cardDiv =   $('.card-box')


function Cone(name, flavor) {
  this.name = name;
  this.flavor = flavor;
}

function makeCone() {
  var cone = new Cone(coneDisplay.val(), $('input:checked'));
  cardDiv.append(coneOutput(cone))
}

function coneOutput(newCone) {
  $('.card-box').append(` <div class="cone-card">
      <div class="card-top"><h3 class="conedisplay">${newCone.name}</h3><p>Flavors</p></div>
    <div class="card-bottom"></div>
</div>`)
}

// function getChecked(check) {
//   var $('.flavorchecklist')

// function checkChecks() {
// var checkList = $('.checkbox')
// checkList.forEach(function object, index) {
//   console.log(checklist)
//   }
// }


$('#submit').on('click', function() {
  makeCone();
});
