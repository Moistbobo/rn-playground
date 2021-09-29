import React from 'react';

import {Text} from 'react-native';
import ReactiveBgScrollView from 'components/Reanimated/ReactiveBgScrollView';

const PanningScrollWithReactiveBackground = () => {
  return (
    <ReactiveBgScrollView panHeight={200}>
      <Text>{text}</Text>
    </ReactiveBgScrollView>
  );
};

const text = `According to her artist, RAN, MDR is a little on the shorter side for T-Dolls, being around 157cm tall (around 5ft 1in in American units). MDR is one of a number of T-Dolls with heterochromia, and has one blue eye and one pink eye. She has long silvery-white hair reaching to her lower back, accented with a neon pink highlight. She has tied up one side of her hair into a side-tail.

MDR's default outfit can be described as fashionable and modern, a fitting style for someone concerned with staying up-to-date on the latest trends. She wears a large black and dark blue jacket with neon pink trimming, under which is a thinner gray soft-shell jacket. She sports a black skirt over a set of black tights. In her damaged art, we can see that she wears a pair of light blue panties, presumably with a matching bra. A beret, a pair of black high-top sneakers, and numerous pouches and belts completes the ensemble. MDR carries with her a range bag, inside which she carries a number of important items: a phone charger shaped like a grenade, a tablet, a gaming device (potentially a gift from RFB), a pair of earbuds, and some packs of rations.

Cocktail Observer

As part of Griffin's anniversary celebrations, a number of T-Dolls have been invited to a fancy cocktail party. MDR is among the guests taking part in the festivities, and has selected an outfit befitting the occasion. She has chosen a sleeveless black dress, form-fitting up top and more frilly at the bottom. On top of this, she is wearing a blue jacket with a large fancy white trim around the collar. A large blue ribbon is tied around her waist, and she's ditched her silver tactical gloves for a pair of slimmer black half-palm gloves. Her hair has been tied up into a ponytail, held up by a ribbon the same color as her jacket. A single thin stocking with a lattice pattern covers her right leg, and she's sporting a pair of black open-toe heels that give her a little extra height. MDR is, of course, carrying her trusty flip-phone with her, as well as a silver case with her weapon stored inside.

Spirit Trap

Of course, there's no way MDR would dare miss out on the Halloween celebrations. To this end, MDR dons a bewitching blue and black dress with a spider web pattern on the front. The dress is adorned with black frills, and a number of spooky decorations can be seen hanging around her waist beside a pair of small bat wings made out of pink fabric (presumably). MDR's left arm is covered by a black glove stretching to the middle of her upper arm, while on her right arm she's sporting a black full arm gloveless sleeve with a cross-hatched pattern. For legwear, MDR has elected to wear a set of black pantyhose with bats printed on them, and for shoes she's chosen a pair of dark blue ankle boots. Her long silver hair has been done up into two small buns, with the rest being allowed to flow out behind her. A pair of small black horns can be seen poking through her hair, and her ears are pointed (likely due to extensions of some kind). Behind her, MDR's drone has been outfitted to carry a white sheet done up to look like a ghost. `;

export default PanningScrollWithReactiveBackground;
