exports.getDashboardData = (req, res) => {
  res.json({
    cards: [
      {
        id: 1,
        title: "Map View",
        icon: "Map",
        description: "View locations across India",
        link: "/map",
        stats: "150+ Locations",
        color: "#4CAF50",
      },
      {
        id: 2,
        title: "Analytics",
        icon: "BarChart2",
        description: "View detailed analytics and reports",
        link: "/analytics",
        stats: "24 Reports",
        color: "#2196F3",
      },
      {
        id: 3,
        title: "Users",
        icon: "Users",
        description: "Manage user accounts and permissions",
        link: "/users",
        stats: "1.2k Users",
        color: "#9C27B0",
      },
      {
        id: 4,
        title: "Activity",
        icon: "Activity",
        description: "Monitor system activity and logs",
        link: "/activity",
        stats: "Real-time",
        color: "#F44336",
      },
    ],
  });
};

exports.getMapData = (req, res) => {
  // Protect this route with authentication middleware if needed
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.json({
    center: [20.5937, 78.9629],
    zoom: 5,
    cities: [
      { name: "Delhi", position: [28.6139, 77.209] },
      { name: "Mumbai", position: [19.076, 72.8777] },
      { name: "Bangalore", position: [12.9716, 77.5946] },
      { name: "Chennai", position: [13.0827, 80.2707] },
      { name: "Kolkata", position: [22.5726, 88.3639] },
    ],
  });
};
