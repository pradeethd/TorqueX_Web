import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Compass, Navigation, Gauge, Truck, Zap } from 'lucide-react';
import SensorCard from './components/SensorCard';
import Header from './components/Header';
import SpeedGraph from './components/SpeedGraph';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { connectMqtt, subscribeTopic } from './mqtt';

interface SensorData {
  torque: number;
  speed: number;
  slopeAngle: number;
  slip: number;
  roadSurface: string;
}

function App() {
  const [sensorData, setSensorData] = useState<SensorData>({
    torque: 0,
    speed: 0,
    slopeAngle: 0,
    slip: 0,
    roadSurface: 'Unknown',
  });

  const [speedHistory, setSpeedHistory] = useState<number[]>([]);
  const [connectionStatus, setConnectionStatus] =
    useState<string>('Connecting...');

  useEffect(() => {
    const client = connectMqtt();

    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      setConnectionStatus('Connected');
      subscribeTopic(client, 'torquex/test', (message) => {
        try {
          const data = JSON.parse(message.toString());
          setSensorData(data);
          setSpeedHistory((prev) => [...prev, data.speed].slice(-20));
        } catch (error) {
          console.error('Error parsing MQTT message:', error);
        }
      });
    });

    client.on('error', (error) => {
      console.error('MQTT error:', error);
      setConnectionStatus('Connection error');
    });

    client.on('reconnect', () => {
      setConnectionStatus('Reconnecting...');
    });

    client.on('offline', () => {
      setConnectionStatus('Offline');
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-4 text-center">
          <p
            className={`text-lg font-semibold ${
              connectionStatus === 'Connected'
                ? 'text-green-600'
                : 'text-red-600'
            }`}
          >
            MQTT Status: {connectionStatus}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SensorCard
            title="Torque"
            value={`${sensorData.torque.toFixed(2)} Nm`}
            icon={<Zap className="w-8 h-8 text-yellow-500" />}
          />
          <SensorCard
            title="Speed"
            value={`${sensorData.speed.toFixed(2)} km/h`}
            icon={<Truck className="w-8 h-8 text-blue-500" />}
          />
          <SensorCard
            title="Slope Angle"
            value={`${sensorData.slopeAngle.toFixed(1)}°`}
            icon={<Compass className="w-8 h-8 text-green-500" />}
          />
          <SensorCard
            title="Slip"
            value={`${sensorData.slip.toFixed(2)}%`}
            icon={<Gauge className="w-8 h-8 text-red-500" />}
          />
          <SensorCard
            title="Road Surface"
            value={sensorData.roadSurface}
            icon={<Navigation className="w-8 h-8 text-purple-500" />}
          />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Speed History
          </h2>
          <SpeedGraph data={speedHistory} />
        </div>
      </main>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
