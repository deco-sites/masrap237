import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";

export interface Props {
  cookieTitle: string;
  closeIcon: AvailableIcons;
  cookieTextContent: string;
  policyText: string;
  policyUrl: string;
  policyTarget?: "_blank" | "_self" | "_parent" | "_top";
  policyIcon: AvailableIcons;
  allowButtonText: string;
  modalWidth: "small" | "medium" | "large";
  modalPosition: "left" | "center" | "right";
}

const script = (id: string) => `
const KEY = 'store-cookie-consent';
const ACCEPTED = 'accepted';
const HIDDEN = "translate-y-[200%]";

const consent = localStorage.getItem(KEY);
const elem = document.getElementById("${id}");

if (consent !== ACCEPTED) {
  elem.querySelector('[data-button-cc-accept]').addEventListener('click', function () {
    localStorage.setItem(KEY, ACCEPTED);
    elem.classList.add(HIDDEN);
  });
  elem.querySelector('[data-button-cc-close]').addEventListener('click', function () {
    elem.classList.add(HIDDEN);
  });
  elem.classList.remove(HIDDEN);
}
`;

const CookieConsent = ({
  cookieTitle,
  closeIcon,
  cookieTextContent,
  policyText,
  policyUrl,
  policyTarget,
  policyIcon,
  allowButtonText,
  modalWidth,
  modalPosition,
}: Props) => {
  const id = `cookie-consent-${useId()}`;

  const widthModal = modalWidth === "small"
    ? "md:w-96"
    : modalWidth === "medium"
    ? "md:w-1/2"
    : "md:w-[calc(100%-32px)]";

  const positionModal = modalPosition === "left"
    ? "md:left-8"
    : modalPosition === "right"
    ? "md:right-8 inset-x-auto"
    : "md:-translate-x-1/2 md:left-1/2";

  return (
    <>
      <div
        id={id}
        className={`fixed w-[calc(100%-32px)] inset-x-4 bottom-4 bg-base-100 px-4 pb-4 pt-5 z-50 shadow-lg ${widthModal} ${positionModal}`}
      >
        <div className="flex flex-row justify-between pb-5">
          <h3 className="text-xl">{cookieTitle}</h3>

          <button data-button-cc-close>
            <Icon
              className="block"
              id={closeIcon}
              width={24}
              height={24}
              strokeWidth={1}
            />
          </button>
        </div>

        <p className="pb-4 text-base">{cookieTextContent}</p>

        <div>
          <a
            className="flex flex-row items-center pb-4 hover:cursor-pointer text-secondary"
            href={policyUrl}
            target={policyTarget}
          >
            {policyText}{" "}
            <Icon
              className="block ml-3"
              id={policyIcon}
              width={16}
              height={16}
              strokeWidth={1}
            />
          </a>

          <button
            className="w-full font-normal text-base text-white bg-primary h-9"
            data-button-cc-accept
          >
            {allowButtonText}
          </button>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
};

export default CookieConsent;
