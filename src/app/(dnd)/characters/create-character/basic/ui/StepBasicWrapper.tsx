import { DNDClass } from "@/interface/classes/DnDClass";
import { StepBasic } from "./StepBasic";

interface Props {
  dndClasses: DNDClass[];
  selectedClass?: string;
  selectedLevel: number;
}

/**
 * Server wrapper for the Basic Character Creation step.
 *
 * Responsibilities:
 * - Receive server-fetched class data
 * - Forward URL-based preselected values
 * - Keep StepBasic as a pure client component
 */
export const StepBasicWrapper = async ({
  dndClasses,
  selectedClass,
  selectedLevel,
}: Props) => {
  /**
   * At the moment, StepBasic handles all initialization
   * through the global character store and form defaults.
   *
   * This wrapper exists to:
   * - Keep server/client boundaries clean
   * - Allow future enhancements (prefill, redirects, guards)
   */
  return <StepBasic dndClasses={dndClasses} />;
};
