"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { CaseModal } from "@/components/work/CaseModal";
import { Cursor } from "@/components/effects/Cursor";
import { Grain } from "@/components/effects/Grain";
import { Preloader } from "@/components/effects/Preloader";
import { ToastHost } from "@/components/effects/ToastHost";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CASES } from "@/lib/data";

type CaseContextValue = {
  openCase: (idx: number) => void;
  closeCase: () => void;
  caseIdx: number | null;
};

const CaseContext = createContext<CaseContextValue | null>(null);

export function useCaseModal(): CaseContextValue {
  const ctx = useContext(CaseContext);
  if (!ctx) throw new Error("useCaseModal must be used within SiteShell");
  return ctx;
}

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [loaded, setLoaded] = useState(false);
  const [caseIdx, setCaseIdx] = useState<number | null>(null);

  const router = useRouter();
  const openCase = useCallback(
    (i: number) => {
      const slug = CASES[i]?.slug;
      if (slug) router.push(`/work/${slug}`);
      else setCaseIdx(i);
    },
    [router],
  );
  const closeCase = useCallback(() => setCaseIdx(null), []);

  const value = useMemo(
    () => ({ openCase, closeCase, caseIdx }),
    [openCase, closeCase, caseIdx],
  );

  return (
    <CaseContext.Provider value={value}>
      <Cursor />
      <Header />
      <main>{loaded ? children : null}</main>
      {loaded ? <Footer /> : null}
      <Preloader onDone={() => setLoaded(true)} />
      <ToastHost />
      {caseIdx != null ? (
        <CaseModal idx={caseIdx} onClose={closeCase} />
      ) : null}
      <Grain />
    </CaseContext.Provider>
  );
}
