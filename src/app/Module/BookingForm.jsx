"use client";

import * as React from "react";
import { format } from "date-fns";
import {
  CalendarIcon,
  Mail,
  MapPin,
  MessageCircle,
  MoveRight,
  Phone,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import useRooms from "@/hooks/useRooms";
import axios from "axios";
import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";

const BookingForm = () => {
  const [activeTab, setActiveTab] = React.useState("dayLong"); // Default to Night Stay
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [adults, setAdults] = React.useState("");
  const [children, setChildren] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [addons, setAddons] = React.useState([]); // For addons (checkbox)
  const [withRoom, setWithRoom] = React.useState(false); // For Day Long option
  const [withFood, setWithFood] = React.useState(false); // For room only
  const { rooms, loading, error } = useRooms();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddonChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAddons([...addons, value]); // Add addon
    } else {
      setAddons(addons.filter((addon) => addon !== value)); // Remove addon
    }
  };

  const handleSubmit = () => {
    const formData = {
      booking_type: activeTab,
      check_in: checkInDate ? format(checkInDate, "yyyy-M-d") : "",
      check_out: checkOutDate ? format(checkOutDate, "yyyy-M-d") : "",
      room: withRoom
        ? rooms.find((room) => room.title === value)?.id || ""
        : "",
      adults,
      children,
      full_name: fullName,
      email,
      phone,
      address,
      remarks,
      addons,
    };

    setIsLoading(true);

    axios
      .post("https://api.turagwaterfrontresort.com/api/booking/", formData)
      .then((response) => {
        console.log("Booking successful:", response.data);
        Swal.fire({
          title: "Success!",
          text: "Your reservation request has been successfully sent. Please check your email for confirmation.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsLoading(false);
      })
      .catch((error) => {
        let errorMessage =
          "There was an issue with your booking. Please try again later.";
        if (error.response) {
          const responseErrors = error.response.data;
          let errorDetails = [];
          if (responseErrors.non_field_errors) {
            errorDetails.push(
              `General Error: ${responseErrors.non_field_errors.join(", ")}`
            );
          }
          Object.keys(responseErrors)
            .filter((field) => field !== "non_field_errors")
            .forEach((field) => {
              const fieldErrors = responseErrors[field];
              errorDetails.push(
                `${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }: ${fieldErrors.join(", ")}`
              );
            });
          errorMessage = errorDetails.join("\n");
        } else if (error.request) {
          errorMessage =
            "No response received from the server. Please check your internet connection and try again.";
        } else {
          errorMessage =
            "There was an issue setting up your request. Please try again later.";
        }
        Swal.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-[30px] text-headingColor font-semibold capitalize">
          book now
        </h3>
        <div className="flex gap-4 mb-5">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "dayLong"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("dayLong")}
          >
            Day Long
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "nightStay"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("nightStay")}
          >
            Night Stay
          </button>
        </div>
      </div>

      {/* Check-in and Check-out Dates */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-5 mt-5">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal h-14",
                !checkInDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {checkInDate ? (
                format(checkInDate, "PPP")
              ) : (
                <span>Select check in date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkInDate}
              onSelect={(date) => {
                setCheckInDate(date);
                if (activeTab === "dayLong") {
                  setCheckOutDate(date); // Set check-out date to the same as check-in for Day Long
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {activeTab === "nightStay" && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal h-14",
                  !checkOutDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {checkOutDate ? (
                  format(checkOutDate, "PPP")
                ) : (
                  <span>Select check out date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      </div>
      {/* With Room or Without Room for Day Long */}
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {activeTab === "dayLong" && (
          <div className="flex justify-between gap-4 items-center border p-3 rounded-md">
            <h1>Room Option :</h1>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="withoutRoom"
                  checked={!withRoom}
                  onChange={() => setWithRoom(false)}
                  className="mr-2 custom-radio"
                />
                Without Room
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="withRoom"
                  checked={withRoom}
                  onChange={() => setWithRoom(true)}
                  className="mr-2 custom-radio"
                />
                With Room
              </label>
            </div>
          </div>
        )}
        <div className="flex justify-between gap-4 items-center border p-3 rounded-md">
          <h1>Choose Plan :</h1>
          <div className="flex items-center gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="withOutFood"
              checked={!withFood}
              onChange={() => setWithFood(false)}
              className="mr-2 custom-radio"
            />
            Room Only
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="withFood"
              checked={withFood}
              onChange={() => setWithFood(true)}
              className="mr-2 custom-radio"
            />
            Full Board
          </label>
          </div>
        </div>
      </div>
      {/* Room Selection for Night Stay or Day Long with Room */}
      {(activeTab === "nightStay" || (activeTab === "dayLong" && withRoom)) && (
        <div className="grid grid-cols-1 gap-5 mt-5">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between h-14"
              >
                {value
                  ? rooms.find((room) => room.title === value)?.title
                  : "Select room..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search rooms..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No rooms found.</CommandEmpty>
                  <CommandGroup>
                    {rooms.map((room) => (
                      <CommandItem
                        key={room.title}
                        value={room.title}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {room.title}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === room.title ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      )}

      {/* Addons Field as Checkboxes */}
      <div className="mt-5">
        <label className="block mb-2">Addons</label>
        <div className="flex flex-wrap gap-4">
          {["breakfast", "lunch", "dinner", "spa"].map((addon) => (
            <label key={addon} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={addon}
                checked={addons.includes(addon)}
                onChange={handleAddonChange}
                className="custom-checkbox"
              />
              {addon.charAt(0).toUpperCase() + addon.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Rest of the Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="flex items-center gap-1 border border-gray-200 p-2 rounded-md shadow-sm">
          <UserRound color="#B89146" size={20} />
          <input
            type="number"
            placeholder="Adults"
            className="p-2 focus:outline-none w-full"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 p-2 rounded-md shadow-sm">
          <UserRound color="#B89146" size={20} />
          <input
            type="number"
            placeholder="Children (e.g. 0)"
            className="p-2 focus:outline-none w-full"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div className="flex items-center gap-1 border border-gray-200 p-2 rounded-md shadow-sm">
          <UserRound color="#B89146" size={20} />
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 focus:outline-none w-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 p-2 rounded-md shadow-sm">
          <Mail color="#B89146" size={20} />
          <input
            type="email"
            placeholder="Email address"
            className="p-2 focus:outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 p-2 rounded-md shadow-sm">
          <Phone color="#B89146" size={20} />
          <input
            type="number"
            placeholder="Phone Number"
            className="p-2 focus:outline-none w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-5 space-y-5">
        <div className="flex items-start gap-1 border border-gray-200 p-2 rounded-md shadow-sm">
          <MapPin color="#B89146" size={20} className="mt-2.5" />
          <textarea
            type="text"
            placeholder="Address"
            className="p-2 focus:outline-none w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex items-start gap-1 border border-gray-200 p-2 rounded-md shadow-sm">
          <MessageCircle color="#B89146" size={20} className="mt-2.5" />
          <textarea
            type="text"
            placeholder="Remarks"
            className="p-2 focus:outline-none w-full"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
      </div>
      <Button
        type="button"
        className="mt-10 bg-primary hover:bg-transparent hover:text-headingColor h-[50px] text-[16px] uppercase text-white font-medium hover:gap-6 transition-all hover:border"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin mr-2" size={20} />
        ) : (
          "Book Now"
        )}
        <MoveRight size={20} />
      </Button>
    </div>
  );
};

export default BookingForm;
