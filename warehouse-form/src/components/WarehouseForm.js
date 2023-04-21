import React, { useState } from "react";
import axios from "axios";

const WarehouseForm = () => {
    const [name, setName] = useState("");
    const [zones, setZones] = useState(
    Array.from({ length: 12 }, () => ({ shelves: [] }))
    );

    const handleShelfChange = (zoneIndex, shelfIndex, shelfName) => {
    const newZones = [...zones];
    newZones[zoneIndex].shelves[shelfIndex].name = shelfName;
    setZones(newZones);
    };

    const addShelf = (zoneIndex) => {
    const newZones = [...zones];
    newZones[zoneIndex].shelves.push({ name: "" });
    setZones(newZones);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

      // Validate warehouse name
        if (!name) {
        alert("Warehouse name is required");
        return;
        }

      // Validate shelf names
        for (const zone of zones) {
            for (const shelf of zone.shelves) {
                if (!shelf.name) {
            alert("All shelf names are required");
            return;
            }
            }
        }

        const payload = {
        name,
        zones: zones.map((zone, index) => ({
            zoneNumber: index + 1,
            shelves: zone.shelves.map((shelf) => shelf.name),
            })),
        };

      // Send the POST request
        try {
        const response = await axios.post("/api/warehouses", payload);
        alert("Warehouse created successfully!");
        } catch (error) {
        alert("An error occurred while creating the warehouse");
        }
    };


    return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Warehouse Name:</label>
        <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="zones-container">
        {zones.map((zone, index) => (
        <div key={index} className="zone">
            <h3>Zone {index + 1}</h3>
            {zone.shelves.map((shelf, shelfIndex) => (
            <div key={shelfIndex}>
                <label htmlFor={`shelf-${index}-${shelfIndex}`}>
                Shelf {shelfIndex + 1} Name:
                </label>
            <input
                id={`shelf-${index}-${shelfIndex}`}
                type="text"
                value={shelf.name}
                onChange={(e) =>
                handleShelfChange(index, shelfIndex, e.target.value)
                }/>
            </div>
        ))}
            {zone.shelves.length < 10 && (
            <button type="button" onClick={() => addShelf(index)}>
                Add Shelf
            </button>
            )}
            
        </div>
        ))}
        </div>
        <div className="button-container">
        <button type="submit">Submit</button>
        </div>
    </form>
    );
};

export default WarehouseForm;
