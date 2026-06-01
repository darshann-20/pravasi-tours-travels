import React from 'react';
import { Car, Users, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function App() {
  const whatsappNumber = '919876543210';

  const vehicles = [
    {
      name: 'Sedan',
      seats: 4,
      price: '₹12/km',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200',
    },
    {
      name: 'SUV',
      seats: 7,
      price: '₹18/km',
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200',
    },
    {
      name: 'Tempo Traveller',
      seats: 12,
      price: '₹28/km',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200',
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <nav
        style={{
          padding: '15px 30px',
          background: '#2563eb',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h2>PRAVASI Tours & Travels</h2>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20to%20book%20a%20trip`}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '10px 20px',
            background: '#25D366',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          WhatsApp Us
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.5)',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
          }}
        >
          <h1>Explore India in Style</h1>
          <p>Luxury Vehicles • Trusted Drivers • Affordable Rates</p>
        </div>
      </section>

      {/* Fleet */}
      <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center' }}>Our Vehicles</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                }}
              />

              <div style={{ padding: '20px' }}>
                <h3>{vehicle.name}</h3>

                <p>
                  <Users size={16} /> {vehicle.seats} Seats
                </p>
                <p>
                  <Car size={16} /> {vehicle.price}
                </p>

                <p>
                  <strong>Type:</strong> {vehicle.Type || 'AC / Non-AC'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 20px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Pricing & Packages
        </h2>

        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
            display: 'grid',
            gap: '20px',
          }}
        >
          {/* Sedan */}
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3>Sedan (Dzire / Etios)</h3>
            <p>
              <strong>AC:</strong> ₹13/km
            </p>
            <p>
              <strong>Non-AC:</strong> ₹11/km
            </p>
            <p>
              <strong>Driver Allowance:</strong> ₹500/day
            </p>
            <p>
              <strong>Night Allowance (10 PM - 6 AM):</strong> ₹300
            </p>
          </div>

          {/* SUV */}
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3>SUV (Ertiga / Innova)</h3>
            <p>
              <strong>AC:</strong> ₹18/km
            </p>
            <p>
              <strong>Non-AC:</strong> ₹16/km
            </p>
            <p>
              <strong>Driver Allowance:</strong> ₹600/day
            </p>
            <p>
              <strong>Night Allowance:</strong> ₹300
            </p>
          </div>

          {/* Tempo Traveller */}
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3>Tempo Traveller (12 Seater)</h3>
            <p>
              <strong>AC:</strong> ₹28/km
            </p>
            <p>
              <strong>Non-AC:</strong> ₹24/km
            </p>
            <p>
              <strong>Driver Allowance:</strong> ₹700/day
            </p>
            <p>
              <strong>Night Allowance:</strong> ₹400
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center' }}>Bangalore Local Package</h2>

        <div
          style={{
            maxWidth: '900px',
            margin: 'auto',
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
          }}
        >
          <h3>8 Hours / 80 KM Package</h3>

          <p>
            <strong>Fixed Price:</strong> ₹3,000
          </p>
          <p>
            <strong>Extra KM:</strong> ₹15/km
          </p>
          <p>
            <strong>Extra Hour:</strong> ₹300/hour
          </p>
          <p>
            <strong>Airport Toll & Parking:</strong> Extra
          </p>
        </div>
      </section>

      <section style={{ padding: '50px 20px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center' }}>Airport Transfers</h2>

        <div
          style={{
            maxWidth: '900px',
            margin: 'auto',
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
          }}
        >
          <p>
            <strong>Bangalore Airport → City:</strong> ₹1,800
          </p>
          <p>
            <strong>City → Bangalore Airport:</strong> ₹1,800
          </p>
          <p>
            <strong>Round Trip:</strong> ₹3,400
          </p>
        </div>
      </section>

      <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center' }}>Outstation Packages</h2>

        <div
          style={{
            maxWidth: '900px',
            margin: 'auto',
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
          }}
        >
          <p>
            <strong>Minimum Billing:</strong> 300 KM Per Day
          </p>
          <p>
            <strong>Sedan:</strong> ₹13/km
          </p>
          <p>
            <strong>SUV:</strong> ₹18/km
          </p>
          <p>
            <strong>Tempo Traveller:</strong> ₹28/km
          </p>

          <hr />

          <p>
            <strong>Driver Allowance:</strong> Extra Per Day
          </p>
          <p>
            <strong>Toll, Parking & State Taxes:</strong> Extra
          </p>
          <p>
            <strong>Night Allowance:</strong> Applicable
          </p>
        </div>
      </section>

      <section style={{ padding: '50px 20px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center' }}>Popular Tour Packages</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: 'auto',
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3>Coorg - 2 Days</h3>
            <p>Starting from ₹8,999</p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3>Ooty - 2 Days</h3>
            <p>Starting from ₹9,999</p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3>Mysore - 1 Day</h3>
            <p>Starting from ₹5,999</p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
            }}
          >
            <h3>Chikmagalur - 2 Days</h3>
            <p>Starting from ₹10,999</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#111827',
          color: 'white',
          padding: '30px',
        }}
      >
        <p>
          <Phone size={16} /> +91 9876543210
        </p>

        <p>
          <MapPin size={16} /> Bengaluru, Karnataka
        </p>
      </footer>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20to%20book%20a%20trip`}
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#25D366',
          color: 'white',
          padding: '15px',
          borderRadius: '50%',
        }}
      >
        <MessageCircle />
      </a>
    </div>
  );
}
