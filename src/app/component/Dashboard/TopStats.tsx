'use client';

import { useRef, useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from '@amcharts/amcharts5/percent';
import UpArrowIcon from '../../../assets/arrow-up-right.svg';
import ArrowRightIcon from '../../../assets/arrow-narrow-right.svg';

const DATA = [
  {
    percentage: 80,
  },
  {
    percentage: 20,
  },
];

function TopStats({ quaterGoalsPercentage = '84' }) {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let root = am5.Root.new('quater-goal');
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
      })
    );

    let series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'percentage',
        startAngle: 180,
        endAngle: 360,
        radius: am5.percent(100),
        innerRadius: am5.percent(85),
      })
    );

    let colorSet = am5.ColorSet.new(root, {
      colors: [
        am5.Color.fromString('#FFCD71'),
        am5.Color.fromString('#FFF7E8'),
      ],
    });

    const label = chart.seriesContainer.children.push(
      am5.Label.new(root, {
        textAlign: 'center',
        centerY: am5.p100,
        centerX: am5.p50,
        text: `${quaterGoalsPercentage}%`,
        fontWeight: '500',
        fontSize: 32,
      })
    );

    series0.set('colors', colorSet);
    series0.ticks.template.set('forceHidden', true);
    series0.labels.template.set('forceHidden', true);

    series0.data.setAll(DATA);

    return () => {
      root.dispose();
    };
  }, [quaterGoalsPercentage]);

  return (
    <div className="flex gap-4">
      <div className="basis-full grow flex flex-col p-6 gap-6 bg-white rounded-2xl">
        <div className="font-semibold text-xl">Revenues</div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="font-medium text-5xl">15%</div>
            <div
              className="flex items-center justify-center"
              style={{ color: '#25CD25' }}
            >
              <UpArrowIcon />
            </div>
          </div>
          <div className="font-medium text-sm" style={{ color: '#454545' }}>
            Increase compared to last week
          </div>
        </div>

        <div
          className="flex gap-1 mt-auto cursor-pointer"
          style={{ color: '#734A00' }}
        >
          <div className="font-sm">Revenues report</div>
          <div className="flex justify-center items-center">
            <ArrowRightIcon />
          </div>
        </div>
      </div>

      <div className="basis-full grow flex flex-col p-6 gap-6 bg-white rounded-2xl">
        <div className="font-semibold text-xl">Lost deals</div>

        <div className="grow flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="font-medium text-5xl">4%</div>
          </div>
          <div className="font-medium text-sm" style={{ color: '#454545' }}>
            You closed 96 out of 100 deals
          </div>
        </div>

        <div className="flex gap-1 cursor-pointer" style={{ color: '#734A00' }}>
          <div className="font-sm">All deals</div>
          <div className="flex justify-center items-center">
            <ArrowRightIcon />
          </div>
        </div>
      </div>

      <div className="basis-full grow flex flex-col p-6 gap-6 bg-white rounded-2xl w-fit">
        <div className="font-semibold text-xl">Quarter goal</div>

        <div className="flex flex-col gap-2">
          <div id="quater-goal" className="w-full	h-28"></div>
        </div>

        <div
          className="flex gap-1 justify-center items-center mt-auto cursor-pointer"
          style={{ color: '#734A00' }}
        >
          <div className="font-sm">All goals</div>
          <div className="flex justify-center items-cetnter">
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopStats;
