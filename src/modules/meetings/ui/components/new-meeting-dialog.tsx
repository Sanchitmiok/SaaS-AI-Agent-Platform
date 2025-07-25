"use client";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { useRouter } from "next/navigation";

interface NewMeetingDialogProps {
  open: boolean;
  openChange: (open: boolean) => void;
}

export const NewMeetingDialog = ({
  open,
  openChange,
}: NewMeetingDialogProps) => {
  const router = useRouter();
  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={openChange}
      title="New Meeting"
      description="Create a new Meeting."
    >
      <MeetingForm
        onSuccess={(id) => {
          openChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => openChange(false)}
      />
    </ResponsiveDialog>
  );
};
