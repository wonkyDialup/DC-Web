
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://yocodhglzrtjketkbmjy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNDk3MywiZXhwIjoxOTQ2NzgwOTczfQ.zY8eO5KLX3RDtKG1vKggqe-oMWE0AE8P7m1Hz6HcAE8"
);

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  export async function createUserFromLogin(e, userData, setLoading) {
    e.preventDefault();
    setLoading(true);
    await sleep(2000);
    try {
      const { data, error } = await supabase
        .from("reduxUserRegister")
        .insert([userData]);
      if (data) {
        setLoading(false);
      } else {
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  }