const groups = {
  'Facial Treatments': [
    'The Signature Peptide Renewal', 'Line Repair', 'Unstressed Facial',
    'Line Repair + Facial Lift', 'Unstress + Facial Lift', 'Timeless Facial',
  ],
  'Head Therapy': [
    'Lumina Total Therapy Experience — A. Hydrating Facial + Head Spa',
    'Lumina Total Therapy Experience — B. Head Spa + Hot Stone Back Massage',
    'Lumina Total Therapy Experience — C. Head Spa + Facial + Back Renewal',
    'Lumina Signature Scalp Facial', 'Lumina Back Renewal Ritual',
    'Lumina Essential Head Spa — A. Classic Head Spa',
    'Lumina Essential Head Spa — B. Head Spa + Express Facial Escape',
    'Express Scalp Therapy',
  ],
  'Face & Body Waxing': [
    'Full Face Waxing', 'Brow Waxing', 'Brow + Lips Waxing', 'Chest Wax',
    'Full Arm Wax', 'Full Back Wax', 'Full Leg Wax', 'Full Stomach Wax',
    'Half Arm Wax', 'Half Leg Wax', 'Half Stomach Wax', 'Lower Back Wax',
    'Sideburn Wax', 'Underarm Wax',
  ],
  "Men's Waxing": [
    'Men Center Brow Wax', 'Men Full Arm Wax', 'Men Full Leg Wax', 'Men Nose Wax',
    'Men Toe Wax', 'Men Chest Wax', 'Men Full Back Wax', 'Men Half Arm Wax',
    'Men Shoulder Wax', 'Men Brow Wax', 'Men Ear Wax',
    'Men Full Front Wax (Chest & Stomach Combo)', 'Men Half Back Wax', 'Men Stomach Wax',
  ],
  'Hair & Add-ons': ['Hair Blow Dry', '45-Min Body Massage'],
};

export const serviceSearchOptions = Object.entries(groups).flatMap(([category, names]) => (
  names.map((name) => ({ name, category }))
));

export const getServiceSuggestions = (query, limit = 6) => {
  const term = query.trim().toLowerCase();
  if (term.length < 2) return [];
  return serviceSearchOptions
    .filter(({ name, category }) => `${name} ${category}`.toLowerCase().includes(term))
    .slice(0, limit);
};
