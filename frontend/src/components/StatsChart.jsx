import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Activity, Zap } from 'lucide-react';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const StatsChart = ({ pokemon }) => {
  const chartData = {
    labels: ['HP', 'Attack', 'Defense', 'Speed', 'Sp. Atk', 'Sp. Def'],
    datasets: [
      {
        label: 'Base Stats',
        data: [
          pokemon.stats.hp,
          pokemon.stats.attack,
          pokemon.stats.defense,
          pokemon.stats.speed,
          pokemon.stats['special-attack'],
          pokemon.stats['special-defense'],
        ],
        backgroundColor: 'rgba(220, 38, 38, 0.2)',
        borderColor: '#dc2626',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: { color: '#e2e8f0' },
        grid: { color: '#e2e8f0' },
        suggestedMin: 0,
        suggestedMax: 150,
        ticks: { display: false }
      },
    },
    plugins: { legend: { display: false } }
  };

  return (
    <div className="card stats-card">
      <div style={{ marginBottom: '30px' }}>
        <h3 className="section-title" style={{ color: '#dc2626' }}>
          <Activity size={20} /> Base Stats
        </h3>
        <div style={{ height: '250px', width: '100%' }}>
          <Radar data={chartData} options={chartOptions} />
        </div>
      </div>

      <div>
        <h3 className="section-title" style={{ color: '#eab308' }}>
          <Zap size={20} /> Abilities
        </h3>
        <div className="abilities-list">
          {pokemon.abilities.map((ability) => (
            <span key={ability} className="ability-tag">
              {ability.replace('-', ' ')}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsChart;