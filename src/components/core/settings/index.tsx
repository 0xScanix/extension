import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SettingsIcon } from "lucide-react";

export function Settings({ }: React.HTMLAttributes<HTMLDivElement>) {
    const onClearCache = async () => {
        chrome.storage.local.clear(() => {
            console.log("cache cleared");
        });
    }

    return (
        <Dialog>
            <DialogTrigger
                className="cursor-pointer"
            >
                <SettingsIcon size={16} />
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        <Button onClick={onClearCache}>Clear Cache</Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
