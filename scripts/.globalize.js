import PROFILES from "./.progiles.js"
import ADDON from "./.addon.js"

function define (name, value) {
	Object.defineProperty( globalThis, name, { get: () => value } );
}

define( "ADDON", ADDON )
define( "PROFILES", PROFILES )