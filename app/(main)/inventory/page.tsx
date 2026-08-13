"use client";

import { useEffect, useState } from "react";
import { getInventoryData, InventorySummary } from "./actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InventoryPage() {
  const [data, setData] = useState<InventorySummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("ALL");

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      setLoading(true);
      const summaryData = await getInventoryData();
      setData(summaryData);
    } catch (err) {
      console.error("Failed to fetch inventory:", err);
    } finally {
      setLoading(false);
    }
  };

  const inventory = data?.inventory || [];

  // Gather unique active locations across all containers for the dropdown
  const allLocations = [
    "ALL",
    ...Array.from(
      new Set(
        inventory.flatMap((item) =>
          item.locationBalances.map((lb) => lb.location),
        ),
      ),
    ),
  ];

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.substance.productName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.substance.lotNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.serialNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bin?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      selectedLocation === "ALL" ||
      item.locationBalances.some((lb) => lb.location === selectedLocation);

    return matchesSearch && matchesLocation;
  });

  const router = useRouter();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Substance Inventory
          </h1>
          <p className="text-sm text-gray-500">
            Unit-level balances across Cage and active locations calculated from
            transaction history.
          </p>
        </div>
        <Link
          href="/api/inventory"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white font-medium rounded-lg shadow-sm transition flex items-center justify-center gap-2 self-start md:self-auto"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          Export CSV
        </Link>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Total Containers
          </span>
          <p className="text-3xl font-extrabold text-gray-900 mt-1">
            {inventory.length}
          </p>
        </div>
        <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Active Locations
          </span>
          <p className="text-3xl font-extrabold text-indigo-600 mt-1">
            {Math.max(0, allLocations.length - 1)}
          </p>
        </div>
        <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Depleted Containers
          </span>
          <p className="text-3xl font-extrabold text-amber-600 mt-1">
            {inventory.filter((i) => i.totalRemaining <= 0).length}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
        <input
          type="text"
          placeholder="Search product, lot #, serial #, or bin..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {allLocations.map((loc) => (
            <option key={loc} value={loc}>
              Location: {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Inventory Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
        {loading ? (
          <div className="p-12 text-center text-gray-500">
            Calculating location balances...
          </div>
        ) : filteredInventory.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            No matching inventory items found.
          </div>
        ) : (
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase text-xs tracking-wider border-b border-gray-200">
              <tr>
                <th className="px-6 py-3">Product / Material</th>
                <th className="px-6 py-3">Lot & Serial #</th>
                <th className="px-6 py-3">Location Breakdown</th>
                <th className="px-6 py-3 text-right">Total Remaining</th>
                <th className="px-6 py-3 text-right">Initial Net</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => router.push(`/inventory/${item.id}`)}
                  className="hover:bg-indigo-50/50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">
                      {item.substance.productName}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.substance.materialType}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-mono text-xs text-gray-800">
                      Lot: {item.substance.lotNumber}
                    </div>
                    <div className="font-mono text-xs text-gray-500">
                      SN: {item.serialNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {item.locationBalances.length === 0 ? (
                      <span className="text-xs text-gray-400">
                        None (Fully Used/Lost)
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-1.5">
                        {item.locationBalances.map((lb) => (
                          <span
                            key={lb.location}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
                          >
                            <strong className="mr-1">{lb.location}:</strong>
                            {lb.amount.toFixed(2)} {item.substance.unit}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right font-mono font-bold text-gray-900">
                    {item.totalRemaining} {item.substance.unit}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-xs text-gray-500">
                    {item.initialNet} {item.substance.unit}
                  </td>
                  <td className="px-6 py-4">
                    {item.totalRemaining <= 0 ? (
                      <span className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-50 rounded-md">
                        Depleted
                      </span>
                    ) : item.totalRemaining <
                      parseFloat(item.initialNet) * 0.2 ? (
                      <span className="px-2 py-1 text-xs font-semibold text-amber-700 bg-amber-50 rounded-md">
                        Low Stock
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-md">
                        Available
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
