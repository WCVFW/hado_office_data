import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

export default function HeaderNav({ className }: { className?: string }) {
  const location = useLocation();

  return (
    <NavigationMenu className={cn("font-medium", className)}>
      <NavigationMenuList>
        {/* Consult an Expert */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100">
            Consult an Expert
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[280px] p-6">
              <MenuGroup
                title="Talk to an Expert"
                links={[
                  ["Talk to a Lawyer", "/ConsultanExpert/talkToLawyer"],
                  [
                    "Talk to a Chartered Accountant",
                    "/ConsultanExpert/talkToCA",
                  ],
                  ["Talk to a Company Secretary", "/ConsultanExpert/talkToCS"],
                  [
                    "Talk to an IP/Trademark Lawyer",
                    "/ConsultanExpert/talkToIP",
                  ],
                ]}
                currentPath={location.pathname}
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Business Setup */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100">
            Business Setup
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[900px] grid-cols-3 gap-8 p-6 max-h-[500px] overflow-y-auto">
              <MenuGroup
                title="Company Registration"
                links={[
                  ["Private Limited Company", "/BusinessSetup/plc"],
                  ["Limited Liability Partnership", "/BusinessSetup/llp"],
                  ["One Person Company", "/BusinessSetup/opc"],
                  ["Sole Proprietorship", "/BusinessSetup/sp"],
                  ["Nidhi Company", "/BusinessSetup/nidhi"],
                  ["Producer Company", "/BusinessSetup/producer"],
                  ["Partnership Firm", "/BusinessSetup/partnership"],
                  ["Startup India Registration", "/BusinessSetup/startup"],
                ]}
                currentPath={location.pathname}
              />
              <MenuGroup
                title="International Business Setup"
                links={[
                  ["US Incorporation", "/International/us"],
                  ["Singapore Incorporation", "/International/singapore"],
                  ["UK Incorporation", "/International/uk"],
                  ["Netherlands Incorporation", "/International/netherlands"],
                  ["Hong Kong Company", "/International/hong-kong"],
                  ["Dubai Company", "/International/dubai"],
                  [
                    "International TM Registration",
                    "/International/international-trademark",
                  ],
                ]}
                currentPath={location.pathname}
              />
              <MenuGroup
                title="Licenses & Registrations"
                links={[
                  ["Digital Signature Certificate", "/Licenses/dsc"],
                  ["Udyam Registration", "/Licenses/udyam"],
                  ["MSME Registration", "/Licenses/msme"],
                  ["ISO Certification", "/Licenses/iso"],
                  ["FSSAI (Food License)", "/Licenses/fssai"],
                  ["Import/Export Code (IEC)", "/Licenses/iec"],
                  ["Apeda RCMC", "/Licenses/apeda-rcmc"],
                  ["Spice Board Registration", "/Licenses/spice-board"],
                  ["FIEO Registration", "/Licenses/fieo"],
                  ["Legal Metrology", "/Licenses/legal-metrology"],
                  ["Hallmark Registration", "/Licenses/hallmark"],
                  ["BIS Registration", "/Licenses/bis"],
                  ["Liquor License", "/Licenses/liquor-license"],
                  ["CLRA Registration & Licensing", "/Licenses/clra"],
                  ["AD Code Registration", "/Licenses/ad-code"],
                  ["IRDAI Registration", "/Licenses/irdai"],
                  ["Drug & Cosmetic License", "/Licenses/drug-cosmetic"],
                  ["Customs Clearance", "/Licenses/customs-clearance"],
                ]}
                currentPath={location.pathname}
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>


        {/* Fundraising */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100">
            Fundraising
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[260px] p-6">
              <MenuGroup
                title="Fundraising Services"
                links={[
                  ["Fundraising", "/Fundraising"],
                  ["Pitch Deck", "/Fundraising/pitch-deck"],
                  ["Business Loan", "/Fundraising/business-loan"],
                  ["DPR Service", "/Fundraising/dpr"],
                ]}
                currentPath={location.pathname}
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* NGO */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100">
            NGO
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[700px] grid-cols-2 gap-10 p-6">
              <MenuGroup
                title="NGO Registration"
                links={[
                  ["NGO", "/NGO"],
                  ["Section 8 Company", "/NGO/section-8"],
                  ["Trust Registration", "/NGO/trust"],
                  ["Society Registration", "/NGO/society"],
                ]}
                currentPath={location.pathname}
              />
              <MenuGroup
                title="NGO Compliance"
                links={[
                  ["NGO Compliance", "/NGO/compliance"],
                  ["Section 8 Compliance", "/NGO/compliance-section-8"],
                  ["CSR-1 Filing", "/NGO/csr1"],
                  ["Sec.80G & Sec.12A", "/NGO/80g-12a"],
                  ["Darpan Registration", "/NGO/darpan"],
                  ["FCRA Registration", "/NGO/fcra"],
                ]}
                currentPath={location.pathname}
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/* Reusable MenuGroup component */
function MenuGroup({
  title,
  links,
  currentPath,
}: {
  title: string;
  links: [string, string][];
  currentPath: string;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-black">{title}</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([label, href]) => (
          <li key={label}>
            <NavigationMenuLink asChild>
              <Link
                to={href}
                className={`block rounded-md px-2 py-1 transition-colors hover:bg-gray-100 text-black ${currentPath === href
                  ? "bg-gray-200 text-black font-semibold"
                  : ""
                  }`}
              >
                {label}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
