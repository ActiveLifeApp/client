import image01 from 'assets/illustrations/slide01.svg';
import image02 from 'assets/illustrations/slide02.svg';
import image03 from 'assets/illustrations/slide03.svg';
import image04 from 'assets/illustrations/slide04.svg';
import { SlideListData } from './Slider.model';

export const slideList: SlideListData = [
  {
    key: 'slide01',
    title: 'Start changing your life',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    image: image01,
  },
  {
    key: 'slide02',
    title: 'Develop healthy habits',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    image: image02,
  },
  {
    key: 'slide03',
    title: 'Measure your progress',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    image: image03,
  },
  {
    key: 'slide04',
    title: 'Do something with your life',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    image: image04,
  },
];
