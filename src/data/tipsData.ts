export interface EcoTip {
  id: string;
  category: 'Plastic Reduction' | 'Water Conservation' | 'Energy Saving' | 'Waste Segregation' | 'Sustainable Lifestyle';
  title: string;
  actionableStep: string;
  didYouKnow: string;
  impactImpact: string;
  difficulty: 'Easy' | 'Moderate' | 'Pro Habit';
}

export const ECO_TIPS: EcoTip[] = [
  {
    id: 'tip-1',
    category: 'Plastic Reduction',
    title: 'Ditch Single-Use Canteen Cups',
    actionableStep: 'Carry a lightweight stainless steel bottle or thermos to college. Ask vendors to fill your cup directly for tea or juice.',
    didYouKnow: 'A single reusable cup saves an estimated 500 disposable plastic-lined cups from local landfills every college semester.',
    impactImpact: '~18 kg carbon footprint reduction per student annually',
    difficulty: 'Easy',
  },
  {
    id: 'tip-2',
    category: 'Energy Saving',
    title: 'The "Unplug When Charged" Habit',
    actionableStep: 'Laptops and phone bricks consume phantom power (vampire load) even when disconnected from devices. Switch off lab sockets when done.',
    didYouKnow: 'Standby power accounts for up to 5-10% of total residential and campus electricity consumption globally.',
    impactImpact: 'Prevents ~45 kg of CO2 emissions per workstation yearly',
    difficulty: 'Easy',
  },
  {
    id: 'tip-3',
    category: 'Water Conservation',
    title: 'Close Taps While Soap Scrubbing',
    actionableStep: 'Never let the tap run continuously while washing hands or utensils in the hostel mess. Turn it off during the 20-second lather.',
    didYouKnow: 'Running a tap for 20 seconds wastes roughly 2 to 3 litres of fresh treated water needlessly.',
    impactImpact: 'Saves over 1,800 litres of clean potable water every year',
    difficulty: 'Easy',
  },
  {
    id: 'tip-4',
    category: 'Waste Segregation',
    title: 'Clean Rinsing Before Recycling',
    actionableStep: 'Greasy pizza boxes and soiled packaging cannot be recycled with clean dry paper. Keep paper dry and rinse metal cans before binning.',
    didYouKnow: 'A single unwashed food container can contaminate an entire 50kg batch of recyclable paper pulp at recycling plants.',
    impactImpact: 'Ensures 100% recyclability of clean sorting batches',
    difficulty: 'Moderate',
  },
  {
    id: 'tip-5',
    category: 'Sustainable Lifestyle',
    title: 'Adopt the "Think Before Print" Rule',
    actionableStep: 'Read lab manuals, code documentation, and assignment drafts digitally in dark or sepia mode instead of printing physical reams.',
    didYouKnow: 'Making one standard sheet of A4 paper requires approximately 10 litres of water and generates chemical bleach runoff.',
    impactImpact: 'Saves up to 12 reams of virgin wood pulp paper per student degree',
    difficulty: 'Easy',
  },
  {
    id: 'tip-6',
    category: 'Energy Saving',
    title: 'Optimize Air Conditioning Set-Points',
    actionableStep: 'Set computer lab and hostel room ACs to 24°C or 25°C instead of 18°C. Pair with ceiling fans for comfortable natural airflow.',
    didYouKnow: 'Every 1°C increase in AC set-temperature cuts electricity consumption by roughly 6%.',
    impactImpact: 'Cuts cooling energy bills and peak load demand by 24%',
    difficulty: 'Moderate',
  },
  {
    id: 'tip-7',
    category: 'Plastic Reduction',
    title: 'Repurpose Cardboard & Old T-Shirts as Cleaning Rags',
    actionableStep: 'Instead of buying microfibre polyester synthetic wipes that shed microplastics during washes, upcycle 100% cotton worn-out clothing.',
    didYouKnow: 'Synthetic microfiber cloths shed thousands of microplastic fragments with every wash cycle into water bodies.',
    impactImpact: 'Zero microplastic release and zero waste lifecycle extension',
    difficulty: 'Easy',
  },
  {
    id: 'tip-8',
    category: 'Sustainable Lifestyle',
    title: 'Carpool & Campus Bicycle Commuting',
    actionableStep: 'Team up with batchmates for shared rides to college or pedal a bicycle for short trips around Crossing Republik and Ghaziabad.',
    didYouKnow: 'Commuting by bicycle instead of a two-wheeler saves around 150 grams of CO2 per kilometer.',
    impactImpact: 'Reduces local vehicular smog and promotes active fitness',
    difficulty: 'Moderate',
  },
];
