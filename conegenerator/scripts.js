var coneDisplay = $('.flavorbox')
var flavorDisplay = $('.flavorchecklist')
var cardDiv =   $('.card-box')


function Cone(name, flavor) {
  this.name = name;
  this.flavor = flavor;
}

function makeCone() {
  var cone = new Cone(coneDisplay.val(), flavorDisplay);
  cardDiv.append(coneOutput(cone))
}

function coneOutput(newCone) {
  $('.card-box').append(`<div class="cone-card">
          <h3 class="conedisplay">${newCone.name}</h3>
        <p class="flavordisplay">${newCone.flavor}</p>
      </div>`)
}


$('#submit').on('click', function() {
  makeCone();
  console.log($('.flavorchecklist:checked'))
});
