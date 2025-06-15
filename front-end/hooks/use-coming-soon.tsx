import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import ComingSoon from "@/layout/coming-soon";
import React from "react";

const useComingSoon = (isDialog?: boolean) => {
  const [comingSoon, setComingSoon] = React.useState(false);
  const handleComingSoon = () => {
    setComingSoon(true);
  };
  const comingSoonContent = (
    <>
      {isDialog ? (
        <Dialog open={comingSoon} onOpenChange={setComingSoon}>
          <DialogContent hideCloseButton>
            <DialogTitle>Coming soon</DialogTitle>
            <ComingSoon />
          </DialogContent>
        </Dialog>
      ) : (
        <ComingSoon isDark />
      )}
    </>
  );
  return {
    comingSoonContent: comingSoon ? comingSoonContent : <></>,
    handleComingSoon,
  };
};

export default useComingSoon;
