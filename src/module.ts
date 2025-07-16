import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addSliderInput({
      category: ["Display"],
      path: 'opacity',
      name: 'Opacity',
      settings: {
        min: 0.0,
        max: 1.0,
        step: 0.05,
      },
      defaultValue: 0.6,
    })
    .addNumberInput({
      category: ["Direction"],
      path: 'slices',
      name: 'Cake slices',
      settings: {
        min: 1,
        integer: true,
      },
      defaultValue: 32,
    })
    .addRadio({
      category: ["Direction"],
      path: 'x_grid',
      name: 'Grid labels',
      defaultValue: 'degrees',
      settings: {
        options: [
          {
            value: 'degrees',
            label: 'Degrees',
          },
          {
            value: 'compass',
            label: 'Compass',
          },
        ],
      }
    })
    .addSliderInput({
      category: ["Speed"],
      path: 'rings',
      name: 'Rings',
      settings: {
        min: 1,
        max: 16,
        integer: true,
      },
      defaultValue: 5,
    })
    .addNumberInput({
      category: ['Speed'],
      path: 'start',
      name: 'Start',
      settings: {
        'min': 0,
      },
      defaultValue: 0,
    })
    .addTextInput({
      category: ['Speed'],
      path: 'step',
      name: 'Step',
      defaultValue: '',
    })
    .addUnitPicker({
      category: ['Speed'],
      path: 'unit',
      name: 'Unit',
      defaultValue: 'velocityms',
    })
    .addRadio({
      category: ["Speed"],
      path: 'scale',
      name: 'Scale',
      defaultValue: 'absolute',
      settings: {
        options: [
          {
            value: 'absolute',
            label: 'Absolute',
          },
          {
            value: 'percent',
            label: 'Percent',
          },
        ],
      }
    })
    .addRadio({
      category: ["Alignment"],
      path: 'windroseAlignment',
      name: 'Windrose Alignment',
      defaultValue: 'center',
      settings: {
        options: [
          { value: 'center', label: 'Center' },
          { value: 'left', label: 'Left' },
          { value: 'top', label: 'Top' },
          { value: 'bottom', label: 'Bottom' },
        ],
      },
    })
    .addSliderInput({
      category: ["Font Sizes"],
      path: 'legendFontSize',
      name: 'Legend Font Size',
      settings: {
        min: 8,
        max: 16,
        step: 1,
      },
      defaultValue: 12,
    })
    .addSliderInput({
      category: ["Font Sizes"],
      path: 'speedFontSize',
      name: 'Speed Font Size',
      settings: {
        min: 8,
        max: 16,
        step: 1,
      },
      defaultValue: 14,
    })
    .addSliderInput({
      category: ["Font Sizes"],
      path: 'directionFontSize',
      name: 'Direction Font Size',
      settings: {
        min: 8,
        max: 16,
        step: 1,
      },
      defaultValue: 14,
    })
});
